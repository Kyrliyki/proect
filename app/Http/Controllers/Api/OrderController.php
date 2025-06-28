<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return Order::with('user', 'items.game')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'items' => 'required|array',
            'items.*.game_id' => 'required|exists:games,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $order = Order::create([
            'user_id' => $validated['user_id'],
            'total_amount' => 0,
        ]);

        $total = 0;
        
        foreach ($validated['items'] as $item) {
            $game = Game::find($item['game_id']);
            $orderItem = $order->items()->create([
                'game_id' => $item['game_id'],
                'quantity' => $item['quantity'],
                'price_at_purchase' => $game->price,
            ]);
            
            $total += $game->price * $item['quantity'];
        }

        $order->update(['total_amount' => $total]);

        return $order->load('items.game');
    }

    public function show(Order $order)
    {
        return $order->load('user', 'items.game');
    }

    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => 'sometimes|in:pending,completed,cancelled',
        ]);

        $order->update($validated);
        return $order;
    }
}