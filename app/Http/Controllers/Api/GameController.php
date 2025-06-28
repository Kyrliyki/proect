<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function index()
    {
        return Game::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'developer' => 'required|string|max:255',
            'publisher' => 'required|string|max:255',
            'release_date' => 'required|date',
            'platform' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'image_url' => 'required|url',
        ]);

        return Game::create($validated);
    }

    public function show(Game $game)
    {
        return $game;
    }

    public function update(Request $request, Game $game)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'price' => 'sometimes|numeric',
            'developer' => 'sometimes|string|max:255',
            'publisher' => 'sometimes|string|max:255',
            'release_date' => 'sometimes|date',
            'platform' => 'sometimes|string|max:255',
            'genre' => 'sometimes|string|max:255',
            'image_url' => 'sometimes|url',
        ]);

        $game->update($validated);
        return $game;
    }

    public function destroy(Game $game)
    {
        $game->delete();
        return response()->noContent();
    }
}