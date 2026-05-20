<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            // Relasi ke tabel users dan course_categories
            $table->foreignId('instructor_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('course_categories')->onDelete('cascade');
            
            $table->string('title', 100);
            $table->string('slug', 100)->unique();
            $table->text('description')->nullable();
            $table->enum('level', ['beginner', 'intermediate', 'advanced']);
            $table->integer('duration')->default(120);
            $table->bigInteger('price')->nullable();
            $table->string('thumbnail', 255)->nullable();
            $table->enum('status', ['draft', 'published', 'archive'])->default('draft');
            $table->integer('quota')->nullable();
            $table->integer('enrolled_count')->default(0);
            $table->decimal('rating', 3, 1)->default(0.0);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};