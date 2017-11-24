<?php

namespace App\Helpers;

use Illuminate\Contracts\Pagination\Paginator;

trait CoinHelpers
{

    public static function get()
    {
        $coin = [
            [ "label" => '比特币', "value" => 1, "name" => "BTC"],
            [ "label" => '以太币', "value" => 2, "name" => "ETH"],

        ];

        return $coin;
    }
}
