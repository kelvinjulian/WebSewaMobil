<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();

            $table->string('name'); // bmw m4
            $table->string('slug'); // domain.com/details/bmw-m4
            $table->string('thumbnail');

            $table->text('about'); // deskripsi

            $table->unsignedBigInteger('price'); // unsignedBigInteger berarti angkanya tidak bisa negatif
            $table->unsignedBigInteger('duration');
            $table->unsignedBigInteger('horse_power');
            $table->unsignedBigInteger('cc');
            $table->unsignedBigInteger('max_speed');

            $table->boolean('is_popular'); // true or false

            $table->foreignId('category_id')->constrained()->cascadeOnDelete(); // foreignId = unsignedBigInteger + foreignKey

            $table->softDeletes(); // untuk menambahkan field baru di database yg bernama deleted_at, yg nantinya akan diisi ketika data dihapus, agar data tidak terhapus secara permanen, karena siapa tau data tersebut adalah data penting

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
