<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MoviesController;
use App\Http\Resources\MoviesCollection;
use App\Models\Movie;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('HomePage', [
//         'title' => "Home Bang",
//     ]);
// });

Route::get('/', function() {
    $movies = new MoviesCollection(Movie::paginate(6));
    return Inertia::render('HomePage', [
        'title' => "Home",
        'movies' => $movies
    ]);
});

// Route::get('/{movies:id}', function() {
//     $movies = Movie::all();
//     return Inertia::render('MovieDetail', [
//         'movies' => $movies
//     ]);
// });

Route::get('/movie', function() {
    $movies = Movie::all();
    return Inertia::render('MovieDetail', [
        'title' => "Movie-Detail",
        'movies' => $movies
    ]);
});

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('/movies', MoviesController::class)->middleware(['auth', 'verified']);    


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
