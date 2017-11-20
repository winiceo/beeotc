<?php

namespace App\Http\Controllers;


use App\Repositories\OrderRepository;

class OrderController extends Controller
{
    protected $order;

    public function __construct(OrderRepository $order)
    {
        $this->order = $order;
    }


    /**
     * Display the article resource by article slug.
     * 
     * @param  string $slug
     * @return mixed
     */
    public function info($id)
    {
        $order = $this->order->getById($id);

//        $article->content = collect(json_decode($article->content))->get('html');

        return view('order.info', compact('order'));
    }
}
