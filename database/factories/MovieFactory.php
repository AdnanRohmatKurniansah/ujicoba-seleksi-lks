<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->title(),
            'genre' => fake()->title(),
            'duration' => fake()->time(),
            'synopsis' => fake()->paragraph(),
            'poster' => fake()->imageUrl(),
            'trailer' => fake()->imageUrl(),
            'rating' => fake()->numberBetween(123456789),
        ];
    }
}
