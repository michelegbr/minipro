<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Http\Requests\CourseRequest; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Cache; 

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $cacheKey = 'courses_' . md5(json_encode($request->all()));

        $courses = Cache::remember($cacheKey, 60, function () use ($request) {
            $query = Course::with(['category', 'instructor']);

            if ($request->has('search')) {
                $query->where('title', 'like', '%' . $request->search . '%');
            }
            if ($request->has('category_id')) {
                $query->where('category_id', $request->category_id);
            }
            if ($request->has('level')) {
                $query->where('level', $request->level);
            }

            if ($request->has('sort_by') && $request->has('order')) {
                $allowedSorts = ['rating', 'enrolled_count', 'duration'];
                if (in_array($request->sort_by, $allowedSorts)) {
                    $query->orderBy($request->sort_by, $request->order);
                }
            }

            return $query->get()->map(function ($course) {
                $ratingClass = 'Regular';
                if ($course->rating >= 8.5) {
                    $ratingClass = 'Top Rated';
                } elseif ($course->rating >= 7.0) {
                    $ratingClass = 'Recommended';
                }
                $course->rating_class = $ratingClass;
                return $course;
            });
        });

        return response()->json([
            'status' => 'success',
            'message' => 'Data kursus berhasil diambil',
            'data' => $courses
        ]);
    }

    public function store(CourseRequest $request)
    {
        if (Auth::user()->role !== 'instructor') {
            return response()->json(['status' => 'error', 'message' => 'Forbidden. Hanya Instructor yang bisa membuat course.'], 403);
        }

        $validatedData = $request->validated();
        
        $validatedData['instructor_id'] = Auth::id(); 

        $course = Course::create($validatedData);

        return response()->json([
            'status' => 'success',
            'message' => 'Kursus berhasil ditambahkan',
            'data' => $course
        ], 201); 
    }

    public function show($id)
    {
        $course = Course::with(['category', 'instructor'])->find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tidak ditemukan'
            ], 404); 
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Detail kursus berhasil diambil',
            'data' => $course
        ]);
    }

    public function update(CourseRequest $request, $id)
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        if (Auth::user()->role !== 'instructor' || $course->instructor_id !== Auth::id()) {
            return response()->json(['status' => 'error', 'message' => 'Forbidden. Anda bukan pemilik course ini.'], 403);
        }

        $course->update($request->validated());

        return response()->json([
            'status' => 'success',
            'message' => 'Kursus berhasil diupdate',
            'data' => $course
        ]);
    }

    public function destroy($id)
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        if (Auth::user()->role !== 'instructor' || $course->instructor_id !== Auth::id()) {
            return response()->json(['status' => 'error', 'message' => 'Forbidden. Anda bukan pemilik course ini.'], 403);
        }

        $course->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Kursus berhasil dihapus',
            'data' => null
        ]);
    }
}