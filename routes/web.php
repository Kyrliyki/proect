<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;  // Добавьте этот импорт
use App\Http\Controllers\GameController;
use App\Http\Controllers\CartController;

Route::get('/', function () {
    return Inertia::render('welcome'); // или ваш основной компонент React
});
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia\Inertia::render('Dashboard');
    })->name('dashboard');

    // Games
    Route::get('/games', [GameController::class, 'index'])->name('games.index');
    Route::get('/games/{game}', [GameController::class, 'show'])->name('games.show');

    // Cart
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/add/{game}', [CartController::class, 'add'])->name('cart.add');
    Route::post('/cart/remove/{game}', [CartController::class, 'remove'])->name('cart.remove');

   
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');
// Маршрут для обработки формы входа
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);