<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $cart = $request->session()->get('cart', [
            'items' => [],
            'subtotal' => 0,
            'tax' => 0,
            'total' => 0,
        ]);

        return Inertia::render('Cart', [
            'cart' => $cart,
        ]);
    }

    public function add(Request $request, Game $game)
    {
        $cart = $request->session()->get('cart', [
            'items' => [],
            'subtotal' => 0,
            'tax' => 0,
            'total' => 0,
        ]);

        $existingItemIndex = array_search($game->id, array_column($cart['items'], 'id'));

        if ($existingItemIndex !== false) {
            $cart['items'][$existingItemIndex]['quantity'] += 1;
        } else {
            $cart['items'][] = [
                'id' => uniqid(),
                'game' => $game,
                'quantity' => 1,
                'price_at_purchase' => $game->price,
            ];
        }

        $this->calculateTotals($cart);

        $request->session()->put('cart', $cart);

        return redirect()->back();
    }

    public function remove(Request $request, Game $game)
    {
        $cart = $request->session()->get('cart', [
            'items' => [],
            'subtotal' => 0,
            'tax' => 0,
            'total' => 0,
        ]);

        $cart['items'] = array_filter($cart['items'], function ($item) use ($game) {
            return $item['game']['id'] !== $game->id;
        });

        $this->calculateTotals($cart);

        $request->session()->put('cart', $cart);

        return redirect()->back();
    }

    protected function calculateTotals(&$cart)
    {
        $cart['subtotal'] = array_reduce($cart['items'], function ($carry, $item) {
            return $carry + ($item['price_at_purchase'] * $item['quantity']);
        }, 0);

        $cart['tax'] = $cart['subtotal'] * 0.1; // 10% tax
        $cart['total'] = $cart['subtotal'] + $cart['tax'];
    }
}