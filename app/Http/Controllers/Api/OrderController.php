<?php

namespace App\Http\Controllers\Api;

use App\Helpers\OrderHelpers;
use App\Http\Requests\AdRequest;

use App\Models\Ad;
use App\Models\Order;
use App\Models\UserBalance;
use App\Repositories\AdRepository;
use App\Repositories\OrderRepository;
use App\Repositories\TagRepository;
use App\Service\OrderService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Symfony\Component\HttpFoundation\Request;

class OrderController extends ApiController
{


    protected $order;
    protected $status;

    public function __construct(OrderRepository $order)
    {
        ///$this->middleware('auth')->except(['index', 'show']);

        $this->order = $order;


    }


    public function order_create(AdRequest $request, Ad $ad)
    {


        $user = \Auth::user();
        $ad_id = $request->input('ad_id');
        $order_ad = $ad->findOrFail($ad_id);

        $data = array_merge($request->all(), [
            'user_id' => \Auth::id(),
            'order_code' => time(),
            'ad_id' => $order_ad->id,
            'ad_code' => "",
            'ad_user_id' => $order_ad->user_id,
            'buyer_estimate' => '',
            'seller_estimate' => '',
            'status' => 0,
            'coin_type'=>$order_ad->coin_type,
        ]);

        $data['qty']=$data["qty"] * 100000000 ;

        if ($user->id == $order_ad->user_id) {
            return $this->setMsg('自己不能下单')->setCode(2002)->toJson();
        }

        //获取可用余额
        $balance = UserBalance::where('user_id', $order_ad->user_id)
            ->where('coin_type', $order_ad->coin_type)
            ->first();


        $can_balance = $balance->total_balance - $balance->block_balance - $balance->pending_balance;

        if ($data["qty"] > $can_balance) {
            return $this->setMsg('此广告账户余额不足，下单失败')->setCode(2002)->toJson();
        }



        $order = $this->order->store($data);
        Log::info('save_order: '.$order);

        $orderService = new OrderService($order);


        $orderService->sellerlockOrder( );

        //放入监控
        Redis::command('hset', ['monitoring_order', $order->id,Carbon::now()]);
        Log::info('monitoring_order: '.$order->id);


        return $this->setMsg('创建成功')->setData(compact('order'))->toJson();


    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function detail($id)
    {
        $order = $this->order->getById($id);

        return view('order.detail', compact('order'));
    }

    /**
     * 付款完成
     * @param Request $request
     */
    public function order_pay(Request $request)
    {



        $params = $request->all();
        $user = \Auth::user();
        $order = Order::where('user_id', $user->id)
            ->where('id', $params["orderid"])
            ->first();

        if ($order) {
            //更新订单状态
            $order->status = Config::get('constants.ORDER_STATUS.PAY');
            $order->save();

            Log::info('order_status_pay: '.Config::get('constants.ORDER_STATUS.PAY'));

        }
        return $this->setData($order)->toJson();


    }

    /**
     * 取消定单
     * @param Request $request
     */
    public function order_cancel(Request $request)
    {
        $params = $request->all();
        $user = \Auth::user();
        $order = Order::where('user_id', $user->id)
            ->where('id', $params["orderid"])
            ->first();

        if ($order) {
            //更新订单状态
            $order->status = Config::get('constants.ORDER_STATUS.CANCEL');
            $order->save();

            $orderService = new OrderService($order);

            Log::info('order_status_cancel: '.Config::get('constants.ORDER_STATUS.CANCEL'));

            $orderService->sellerUnlockOrder();
        }
        return $this->setData($order)->toJson();


    }


    /**
     * 放行定单
     * @param Request $request
     */
    public function order_release(Request $request)
    {
        $params = $request->all();
        $user = \Auth::user();
        $order = Order::where('ad_user_id', $user->id)
            ->where('id', $params["orderid"])
            ->first();



        if ($order) {
            //更新订单状态
            $order->status = Config::get('constants.ORDER_STATUS.RELEASE');
            $order->save();

            Log::info('order_status_release: '.Config::get('constants.ORDER_STATUS.RELEASE'));

            $orderService = new OrderService($order);
            $orderService->orderRelease();
        }

        return $this->setData($order)->toJson();


    }

    /**
     * 评价订单
     * @param Request $request
     */
    public function order_comment(Request $request)
    {
        $params = $request->all();
        $user = \Auth::user();
        $order = Order::where('user_id', $user->id)
            ->where('id', $params["orderid"])
            ->first();

        if ($order) {
            //更新订单状态
            $order->status = Config::get('constants.ORDER_STATUS.COMMENT');
            $order->save();
//            $orderService=new OrderService($order);
//            $orderService->orderRelease();
        }
        return $this->setData($order)->toJson();


    }

    /**
     * 审诉定单
     * @param Request $request
     */
    public function order_complaint(Request $request)
    {
        $params = $request->all();
        $user = \Auth::user();
        $order = Order::where('user_id', $user->id)
            ->where('id', $params["orderid"])
            ->first();

        if ($order) {
            //更新订单状态
            $order->status = Config::get('constants.ORDER_STATUS.COMPLAINT');
            $order->save();
//            $orderService=new OrderService($order);
//            $orderService->orderRelease();
        }
        return $this->setData($order)->toJson();


    }


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
        $ad_im_token = \GuzzleHttp\json_decode($ad_im_token);
        $ad_im_token->avatar = $ad_user->avatar;

        ///$order->user->avatar = 'https://i0.wp.com/laracasts.s3.amazonaws.com/images/generic-avatar.png?ssl=1';

        $order_im_token = app('rcloud')->user()->getToken(env('RONG_CLOUD_ID_PRE') . $order->user->id, $order->user->name, $order->user->avatar);
        $order_im_token = \GuzzleHttp\json_decode($order_im_token);


        $order_im_token->avatar = $order->user->avatar;


        if ($user->id == $order->ad_user_id) {


            leven('im_token', ($ad_im_token));

            leven('order_im_token', ($order_im_token));

        }
        if ($user->id == $order->user_id) {
            leven('im_token', ($order_im_token));

            leven('order_im_token', ($ad_im_token));

        }


        return view('order.info', compact('order'));
    }

}
