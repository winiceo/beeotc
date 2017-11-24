<?php

namespace App\Queries;

use App\Ad;
use App\Models\Order;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchOrder
{
    /**
     */
    public static function get(Request $request, $user_id, int $perPage = 20): Paginator
    {

        return DB::table('ads')
            ->where(function ($query) use ($request) {

                $coin = $request->input('coin', 1);
                $query->where('crypto_currency', $coin);


                $trade_type = $request->input('type', 0);
                $query->where('trade_type', $trade_type);


            })
            ->paginate($perPage);


    }
}
