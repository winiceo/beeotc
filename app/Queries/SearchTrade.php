<?php

namespace App\Queries;


use App\Models\Ad;
use App\Models\Order;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchTrade
{
    /**
     */
    public static function get(Request $request, int $perPage = 20): Paginator
    {

        return Ad::with("user")
            ->where(function ($query) use ($request) {


                $trade_type = $request->input('trade_type', 1);
                $query->where('trade_type', $trade_type);

            })
            ->paginate($perPage);


    }
}
