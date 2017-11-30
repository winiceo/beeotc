<?php

namespace App\Http\Controllers\Api;

use App\Helpers\OrderHelpers;
use App\Http\Requests\AdRequest;

use App\Models\Ad;
use App\Models\Order;
use App\Repositories\AdRepository;
use App\Repositories\OrderRepository;
use App\Repositories\TagRepository;
use App\Service\OrderService;
use Illuminate\Support\Facades\Config;
use Symfony\Component\HttpFoundation\Request;

class OrderController extends ApiController
{


    protected $order;
    protected $status;

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
    public function order_create(AdRequest $request,Ad $ad)
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

        $orderService=new OrderService($order);

        //发送交易关闭消息
//        $message=[
//            "content"=>"系统消息: 买家拍下未付款<br>买家已拍下，等待买家付款",
//            "extra"=>["order_id"=>$order->id,'system'=>1,'status'=>Config::get('constants.ORDER_STATUS.CREATED')]
//        ];
//        $orderService->buySendMessage($message);

        $orderService->sellerlockOrder();


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

    /**
     * 付款完成
     * @param Request $request
     */
    public function order_pay(Request $request){


        $params = $request->all();
        $user = \Auth::user();
        $order=Order::where('user_id', $user->id)
            ->where('id',$params["orderid"])
            ->first();

        if($order){
            //更新订单状态
            $order->status=Config::get('constants.ORDER_STATUS.PAY');
            $order->save();

            $orderService=new OrderService($order);

            //发送交易关闭消息
//            $message=[
//                "content"=>"系统消息: 买家标记已付款，等待卖家确认收款后释放",
//                "extra"=>["order_id"=>$order->id,'system'=>1,'status'=>Config::get('constants.ORDER_STATUS.PAY')]
//            ];
//            $orderService->buySendMessage($message);

            $orderService->sellerUnlockOrder();
        }
        return  $this->setData($order)->toJson();


    }

    /**
     * 取消定单
     * @param Request $request
     */
    public function order_cancel(Request $request){
        $params = $request->all();
        $user = \Auth::user();
        $order=Order::where('user_id', $user->id)
            ->where('id',$params["orderid"])
            ->first();

        if($order){
            //更新订单状态
            $order->status=Config::get('constants.ORDER_STATUS.CANCEL');
            $order->save();

            $orderService=new OrderService($order);

            //发送交易关闭消息
//            $message=[
//                "content"=>"系统消息: 买家关闭了交易",
//                "extra"=>["order_id"=>$order->id,'system'=>1,'status'=>Config::get('constants.ORDER_STATUS.CANCEL')]
//            ];
//            $orderService->buySendMessage($message);

            $orderService->sellerUnlockOrder();
        }
        return  $this->setData($order)->toJson();



    }


    /**
     * 放行定单
     * @param Request $request
     */
    public function order_release(Request $request){
        $params = $request->all();
        $user = \Auth::user();
        $order=Order::where('user_id', $user->id)
            ->where('id',$params["orderid"])
            ->first();

        if($order){
            //更新订单状态
            $order->status=Config::get('constants.ORDER_STATUS.RELEASE');
            $order->save();
            $orderService=new OrderService($order);
            $orderService->orderRelease();
        }
        return  $this->setData($order)->toJson();



    }

    /**
     * 放行定单
     * @param Request $request
     */
    public function order_comment(Request $request){
        $params = $request->all();
        $user = \Auth::user();
        $order=Order::where('user_id', $user->id)
            ->where('id',$params["orderid"])
            ->first();

        if($order){
            //更新订单状态
            $order->status=Config::get('constants.ORDER_STATUS.COMMENT');
            $order->save();
//            $orderService=new OrderService($order);
//            $orderService->orderRelease();
        }
        return  $this->setData($order)->toJson();



    }

    /**
     * 放行定单
     * @param Request $request
     */
    public function order_complaint(Request $request){
        $params = $request->all();
        $user = \Auth::user();
        $order=Order::where('user_id', $user->id)
            ->where('id',$params["orderid"])
            ->first();

        if($order){
            //更新订单状态
            $order->status=Config::get('constants.ORDER_STATUS.COMPLAINT');
            $order->save();
//            $orderService=new OrderService($order);
//            $orderService->orderRelease();
        }
        return  $this->setData($order)->toJson();



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
