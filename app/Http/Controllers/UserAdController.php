<?php

namespace App\Http\Controllers;

use App\Helpers\CoinHelpers;
use App\Http\Requests\AdRequest;

use App\Queries\SearchAds;
use App\Queries\SearchOrder;
use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\OrderRepository;
use App\Repositories\TagRepository;
use App\Repositories\UserRepository;
use Auth;
use Illuminate\Http\Request;

class UserAdController extends Controller
{

    protected $user;

    protected $order;

    public function __construct(UserRepository $user,OrderRepository $order)
    {
        $this->user = $user;
        $this->order=$order;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $this->user->getById(Auth::id());



        $orders= SearchAds::get($request,$user->id);
        $coins=CoinHelpers::getIds();


        foreach ($orders as $k=>$v){

           $orders[$k]->coin_name=$coins[$v->coin_type]['name'];
        }



        return view('userad.index', compact('user','orders'));
    }


}
