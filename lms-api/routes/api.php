<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseCategoryController;
use App\Http\Controllers\ReportController;

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/{id}', [CourseController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    
    Route::post('/courses', [CourseController::class, 'store']);
    Route::put('/courses/{id}', [CourseController::class, 'update']);
    Route::delete('/courses/{id}', [CourseController::class, 'destroy']);

    Route::apiResource('categories', CourseCategoryController::class);

    Route::get('/instructors/course-count', [ReportController::class, 'instructorCourseCount']);
    Route::get('/transactions/detail', [ReportController::class, 'enrollmentDetail']);

});