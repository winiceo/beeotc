<?php

namespace App\Http\Controllers;


use App\Repositories\OrderRepository;
use App\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

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

        $user = Auth::user();
        $token = $user->createToken('bee')->accessToken;
        leven('access_token', $token);
        $order = $this->order->getById($id);
        leven("order", $order);


        $ad_user = User::findOrFail($order->ad_user_id);

        //$ad_user->avatar = 'https://i0.wp.com/laracasts.s3.amazonaws.com/images/generic-avatar.png?ssl=1';

        $ad_im_token = app('rcloud')->user()->getToken(env('RONG_CLOUD_ID_PRE') . $ad_user->id, $ad_user->name, $ad_user->avatar);
        $ad_im_token=\GuzzleHttp\json_decode($ad_im_token);
        $ad_im_token->avatar=$ad_user->avatar;

        ///$order->user->avatar = 'https://i0.wp.com/laracasts.s3.amazonaws.com/images/generic-avatar.png?ssl=1';

        $order_im_token = app('rcloud')->user()->getToken(env('RONG_CLOUD_ID_PRE') . $order->user->id, $order->user->name, $order->user->avatar);
        $order_im_token=\GuzzleHttp\json_decode($order_im_token);




        $order_im_token->avatar=$order->user->avatar;



        if ($user->id == $order->ad_user_id) {


            leven('im_token',  ($ad_im_token));

            leven('order_im_token',  ($order_im_token));

        }
        if($user->id==$order->user_id){
            leven('im_token',  ($order_im_token));

            leven('order_im_token',  ($ad_im_token));

        }





        return view('order.info', compact('order'));
    }
}
