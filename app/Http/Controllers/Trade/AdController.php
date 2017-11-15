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

class AdController extends Controller
{
    public function __construct()
    {
        $this->middleware([Authenticate::class]);
    }



    public function create()
    {
        return view('trade.ad.create', ['tags' => Tag::all()]);
    }

    public function store(ThreadRequest $request)
    {
        $thread = $this->dispatchNow(CreateThread::fromRequest($request));



        $this->success('forum.threads.created');

        return redirect()->route('thread', $thread->slug());
    }

    public function edit(Thread $thread)
    {
        $this->authorize(ThreadPolicy::UPDATE, $thread);

        return view('forum.threads.edit', ['thread' => $thread, 'tags' => Tag::all()]);
    }

    public function update(ThreadRequest $request, Thread $thread)
    {
        $this->authorize(ThreadPolicy::UPDATE, $thread);

        $thread = $this->dispatchNow(UpdateThread::fromRequest($thread, $request));

        $this->success('forum.threads.updated');

        return redirect()->route('thread', $thread->slug());
    }

    public function delete(Thread $thread)
    {
        $this->authorize(ThreadPolicy::DELETE, $thread);

        $this->dispatchNow(new DeleteThread($thread));

        $this->success('forum.threads.deleted');

        return redirect()->route('forum');
    }

    public function markSolution(Thread $thread, Reply $reply)
    {
        $this->authorize(ThreadPolicy::UPDATE, $thread);

        $this->dispatchNow(new MarkThreadSolution($thread, $reply));

        return redirect()->route('thread', $thread->slug());
    }

    public function unmarkSolution(Thread $thread)
    {
        $this->authorize(ThreadPolicy::UPDATE, $thread);

        $this->dispatchNow(new UnmarkThreadSolution($thread));

        return redirect()->route('thread', $thread->slug());
    }
}
