<?php

use Illuminate\Database\Seeder;

use App\Ad;
class Ads extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        factory(Ad::class, 20)->create();

    }
}
