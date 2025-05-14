<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BookingTransaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'proof',
        'booking_trx_id', // ALPBWA1289
        'started_at',
        'total_amount',
        'price',
        'total_tax_amount',
        'insurance',
        'duration',
        'is_paid',
        'vehicle_id',
        'alpina_store_id',
    ];

    // ini adalah untuk mendapatkan kira kira kode bookingnya nanti itu seperti apa
    // tujuannya untuk membuat kode booking random yang sebelumnya belum ada
    public static function generateUniqueTrxId() 
    {
        $prefix = 'ALPBWA';
        do{
            $randomString = $prefix . mt_rand(1000, 9999);
        } while (self::where('booking_trx_id', $randomString)->exists());

        return $randomString;
    }

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class, 'vehicle_id');
    }

    public function alpinaStore(): BelongsTo
    {
        return $this->belongsTo(AlpinaStore::class, 'alpina_store_id');
    }
}
