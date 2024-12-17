<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);

        // return [
        //     'id' => $this->id,
        //     'name' => $this->name,
        //     'slug' => $this->slug,
        //     'icon' => $this->icon,
        //     'vehicles_count' => $this->vehicles_count,
        //     'vehicles' => VehicleApiResource::collection($this->whenLoaded('vehicles')),
        // ];
    }
}
