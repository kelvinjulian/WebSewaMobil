<?php

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AlpinaStoreController;
use App\Http\Controllers\Api\BookingTransactionController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\VehicleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

    Route::get('/category/{category:slug}', [CategoryController::class, 'show']);
    Route::apiResource('/categories', CategoryController::class);
    // route index, edit, delete, show
    // domain.com/category/{id}
    // domain.com/category/mobil-tracks (ingin dibuat seperti ini)

    Route::apiResource('/stores', AlpinaStoreController::class);

    Route::get('/vehicles/popular', [VehicleController::class, 'popular']);

    Route::get('/vehicle/{vehicle:slug}', [VehicleController::class, 'show']);

    Route::apiResource('/vehicles', VehicleController::class);
    
    Route::apiResource('/testimonials', TestimonialController::class);
    
    Route::post('/booking-transaction', [BookingTransactionController::class, 'store']);
    
    Route::post('/check-booking', [BookingTransactionController::class, 'booking_details']);


