<?php

namespace App\Queries;

use App\Ad;
use Illuminate\Contracts\Pagination\Paginator;

class SearchAds
{
    /**

     */
    public static function get(string $keyword, int $perPage = 20): Paginator
    {
        return Ad::feedQuery()
            ->where('threads.subject', 'LIKE', "%$keyword%")
            ->orWhere('threads.body', 'LIKE', "%$keyword%")
            ->paginate($perPage)
            ->appends(['search' => $keyword]);
    }
}
