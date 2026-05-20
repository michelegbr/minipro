<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CourseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:100',
            'category_id' => 'required|exists:course_categories,id',
            'description' => 'required|string',
            'level' => 'required|in:beginner,intermediate,advanced',
            'duration' => 'nullable|integer|min:1',
            'price' => 'required|numeric|min:0',
            'status' => 'in:draft,published,archive'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => 'error',
            'message' => $validator->errors()->first()
        ], 400));
    }
}