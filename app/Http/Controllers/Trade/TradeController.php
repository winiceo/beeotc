<?php

namespace App\Http\Controllers\Trade;

use App\Models\Tag;
use App\Models\Reply;
use App\Models\Thread;
use App\Jobs\CreateThread;
use App\Jobs\DeleteThread;
use App\Jobs\UpdateThread;
use App\Policies\ThreadPolicy;
use App\Queries\SearchThreads;
use App\Jobs\MarkThreadSolution;
use App\Jobs\UnmarkThreadSolution;
use App\Http\Controllers\Controller;
use App\Http\Requests\ThreadRequest;
use Illuminate\Auth\Middleware\Authenticate;
use App\Http\Middleware\RedirectIfUnconfirmed;

class TradeController extends Controller
{
    public function __construct()
    {
        $this->middleware([Authenticate::class, RedirectIfUnconfirmed::class], ['except' => ['overview', 'show']]);
    }

    public function overview()
    {
//        $search = request('search');
//        $threads = $search ? SearchThreads::get($search) : Thread::feedPaginated();
//
//        return view('forum.overview', compact('threads', 'search'));

//        $search = request('search');
//        $threads = $search ? SearchThreads::get($search) : Thread::feedPaginated();

        return view('trade.overview', compact('threads', 'search'));
    }

    public function show(Thread $thread)
    {
        return view('forum.threads.show', compact('thread'));
    }


}
