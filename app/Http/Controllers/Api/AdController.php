<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AdRequest;

use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\TagRepository;

class AdController extends ApiController
{
    /**
     * @var \App\Repositories\DiscussionRepository
     */
    protected $ad;



    public function __construct(AdRepository $ad )
    {
        //$this->middleware('auth') ;

        $this->ad = $ad;

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


        return view('ad.create' );
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

        $ad=$this->ad->store($data);

        return $this->setMsg('创建成功')->setData(compact('ad'))->toJson();




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

    public function edit($id)
    {
        echo 33;
        exit;
        return $this->response->json($this->ad->getById($id));
    }

}
