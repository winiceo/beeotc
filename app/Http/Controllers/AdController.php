<?php

namespace App\Http\Controllers;

use App\Helpers\CoinHelpers;
use App\Http\Requests\AdRequest;

use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\TagRepository;

class AdController extends Controller
{

    use CoinHelpers;
    /**
     * @var \App\Repositories\DiscussionRepository
     */
    protected $ad;

    /**
     * @var \App\Repositories\TagRepository
     */
    protected $tag;

    public function __construct(AdRepository $ad, TagRepository $tag)
    {
        $this->middleware('auth')->except(['index', 'show']);

        $this->ad = $ad;
        $this->tag = $tag;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $discussions = $this->discussion->page(config('blog.discussion.number'), config('blog.discussion.sort'), config('blog.discussion.sortColumn'));

        return view('discussion.index', compact('discussions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


        $coins=CoinHelpers::get();



        return view('ad.create', compact('coins'));
    }

    /**
     * Store a new discussion.
     * 
     * @param  DiscussionRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdRequest $request)
    {
        $data = array_merge($request->all(), [
            'user_id'      => \Auth::id(),

            'status'       => 0
        ]);

        dump($data);





        $this->ad->store($data);
        exit;

        return redirect()->to('discussion');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail($id)
    {
        $ad = $this->ad->getById($id);



        return view('ad.detail', compact('ad'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ad = $this->ad->getById($id);

        $this->authorize('update', $ad);


        return view('ad.edit', compact('ad'));
    }

    /**
     * Update the discussion by id.
     * 
     * @param  DiscussionRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DiscussionRequest $request, $id)
    {
        $discussion = $this->discussion->getById($id);

        $this->authorize('update', $discussion);

        $data = array_merge($request->all(), [
            'last_user_id' => \Auth::id()
        ]);

        $this->discussion->update($id, $data);

        return redirect()->to("discussion/{$id}");
    }
}
