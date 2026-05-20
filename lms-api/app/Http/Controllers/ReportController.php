<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function instructorCourseCount()
    {
        $data = User::where('role', 'instructor')
            ->withCount('courses') 
            ->get(['id', 'name', 'courses_count']);

        return response()->json([
            'status' => 'success',
            'message' => 'Data jumlah course per instructor',
            'data' => $data
        ]);
    }

    public function enrollmentDetail()
    {
        $data = DB::table('enrollments')
            ->join('users', 'enrollments.user_id', '=', 'users.id')
            ->join('courses', 'enrollments.course_id', '=', 'courses.id')
            ->join('course_categories', 'courses.category_id', '=', 'course_categories.id')
            ->select(
                'enrollments.id as enrollment_id',
                'users.name as student_name',
                'courses.title as course_title',
                'course_categories.name as category_name',
                'enrollments.status',
                'enrollments.enrolled_at'
            )
            ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data detail transaksi/enrollment',
            'data' => $data
        ]);
    }
}