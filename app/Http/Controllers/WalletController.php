<?php

namespace App\Http\Controllers;

use App\Helpers\CoinHelpers;
use App\Http\Requests\AdRequest;

use App\Models\WalletAddress;
use App\Models\Withdraw;
use App\Queries\SearchWithdraw;
use App\Repositories\AddressRepository;
use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\TagRepository;
use App\Repositories\UserRepository;
use App\Repositories\WithdrawRepository;
use App\Service\UserWalletService;
use Auth;
use Illuminate\Support\Facades\View;
use Symfony\Component\HttpFoundation\Request;

class WalletController extends Controller
{
    use CoinHelpers;

    protected $user,$address;

    public function __construct(UserRepository $user,AddressRepository $address,WithdrawRepository $withdraw)
    {
        $this->user = $user;
        $this->address=$address;

        $this->withdraw=$withdraw;

        $coins=CoinHelpers::getIds();
        View::share('coins', $coins);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        UserWalletService::checkWallet();

        $user = $this->user->getById(Auth::id());
        $addresss = $this->address->page(config('trade.address.number'), config('trade.address.sort'), config('trade.address.sortColumn'));



        return view('wallet.index', compact('user','addresss'));
    }


    public function depoist($id){

        $user = $this->user->getById(Auth::id());
        $address=$this->address->getById($id);

        $wallet_address=WalletAddress::first();


        return view('wallet.deposit', compact('user','address','wallet_address'));


    }

    public function withdraw(Request $request,$id){
        $user = $this->user->getById(Auth::id());
        $address=$this->address->getById($id);
        $limit=20;

        $withdraws = Withdraw::
             when($user, function ($query) use ($user) {

              return $query->where('user_id', '=', $user->id);
            })

            ->orderBy('created_at', 'desc')


            ->paginate($limit);




        //$withdraws=SearchWithdraw::get($request,$user->id,1);
        //dump($withdraws);
        return view('wallet.withdraw', compact('user','address','withdraws'));

    }

}
