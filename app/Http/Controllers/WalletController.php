<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdRequest;

use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\TagRepository;
use App\Repositories\UserRepository;
use Auth;

class WalletController extends Controller
{

    protected $user;

    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = $this->user->getById(Auth::id());


        return view('wallet.index', compact('user'));
    }


}
