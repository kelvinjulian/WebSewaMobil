<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vehicle extends Model
{ 
    // tambahkan SoftDeletes karena sebelumnya di migrations kita menambahkan softdeletes
    use HasFactory, SoftDeletes;

    // memberi tahu laravel kira kira nanti atribut apa saja yang bisa ditambahkan oleh pengguna
    // kenapa tidak ada id atau created_at? karena id dan created_at diisi otomatis oleh laravel
    protected $fillable = [
        'name', // porsche taycan
        'slug', // porsche-taycansadfsdfdsadsfsdaafsda-asd-ada-adfsdfas-adfsdfas
        'thumbnail',
        'about',
        'price',
        'duration',
        'horse_power',
        'cc',
        'max_speed',
        'is_popular',
        'category_id', // 1
    ];

    // Method ini digunakan untuk mengatur atribut 'name' dan secara otomatis 
// membuat slug dari nilai name yang diberikan.
public function setNameAttribute($value) {
    {
        $this->attributes['name'] = $value; // Mengatur nilai atribut 'name'.
        $this->attributes['slug'] = Str::slug($value); // Membuat slug berdasarkan nilai 'name'.
    }
}

// Relasi one-to-many inverse (belongsTo) dengan model Category.
// Menunjukkan bahwa entitas ini terkait dengan satu kategori.
public function category(): BelongsTo
{
    return $this->belongsTo(Category::class);
}

// Relasi one-to-many (hasMany) dengan model VehiclePhoto.
// Menunjukkan bahwa entitas ini memiliki banyak foto kendaraan.
public function photos(): HasMany
{
    return $this->hasMany(VehiclePhoto::class);
}

// Relasi one-to-many (hasMany) dengan model Testimonial.
// Menunjukkan bahwa entitas ini memiliki banyak testimoni.
public function testimonials(): HasMany
{
    return $this->hasMany(Testimonial::class);
}


}