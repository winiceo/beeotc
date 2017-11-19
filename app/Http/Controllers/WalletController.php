<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdRequest;

use App\Repositories\AddressRepository;
use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\TagRepository;
use App\Repositories\UserRepository;
use Auth;

class WalletController extends Controller
{

    protected $user,$address;

    public function __construct(UserRepository $user,AddressRepository $address)
    {
        $this->user = $user;
        $this->address=$address;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = $this->user->getById(Auth::id());
        $addresss = $this->address->page(config('trade.address.number'), config('trade.address.sort'), config('trade.address.sortColumn'));



        return view('wallet.index', compact('user','addresss'));
    }


}
