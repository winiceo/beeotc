<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AdRequest;

use App\Models\Ad;
use App\Repositories\AdRepository;
use App\Repositories\OrderRepository;
use App\Repositories\TagRepository;

class OrderController extends ApiController
{

    protected $order;

    public function __construct( OrderRepository $order)
    {
        $this->middleware('auth')->except(['index', 'show']);

        $this->order = $order;

    }


    /**
     * Store a new discussion.
     * 
     * @param  DiscussionRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdRequest $request,Ad $ad)
    {
        $ad_id=$request->input('ad_id');

        $order_ad=$ad->findOrFail($ad_id);


        $data = array_merge($request->all(), [
            'user_id'      => \Auth::id(),
            'order_code'=>time(),
            'ad_id'=>$order_ad->id,
            'ad_code'=>"",
            'ad_user_id'=>$order_ad->user_id,
            'buyer_estimate'=>'',
            'seller_estimate'=>'',
            'status'       => 0
        ]);

        $order=$this->order->store($data);
        return $this->setMsg('创建成功')->setData(compact('order'))->toJson();




    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail($id)
    {
        $order = $this->order->getById($id);

        return view('order.detail', compact('order'));
    }


}
