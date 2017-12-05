<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Order;
use App\Models\Test;
use App\Repositories\AdRepository;
use App\Service\OrderService;
use Illuminate\Http\Request;
use App\Repositories\ArticleRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Jrean\UserVerification\Facades\UserVerification;

use TCG\Voyager\Models\MenuItem;
use Webpatser\Uuid\Uuid;
use Webpatser\Uuid\UuidServiceProvider;

class TestController extends Controller
{
    protected $article;

    public function __construct(ArticleRepository $article)
    {
        $this->article = $article;
    }


    public function mail(){

        $user=Auth::user();

        UserVerification::generate($user);

        dump($user);

        UserVerification::send($user, 'My Custom E-mail Subject','zshdiy@163.com','zshdiy');

    }
    public function test(Request $request)
    {

        //$getCode=\Redis::command('hset', ['safe_check', 17629726688,'33333']);
        $getCode=\Redis::command('hget', ['safe_check', '17629726688']);

        dump($getCode);
        exit;


        $params = $request->all();
        $user = Auth::user();
        $order=Order::where('user_id', 29)
            ->where('id',29)
            ->first();


        if($order){
            $order->status=Config::get('constants.ORDER_STATUS.CANCEL');
            $order->save();

           $orderService=new  OrderService($order);
           $message=[
                "content"=>"系统消息: 买家关闭了交易",
                "extra"=>["order_id"=>$order->id]
           ];
           $orderService->buySendMessage($message);
        }


        //dump($ret);
    }



        public function test1(Test $ad){


        $data =Uuid::generate();


        dump( $data->string);
        exit;

        $ams = DB::select('select * from admin_menus ');

        foreach($ams as $am){
            $am->menu_id=2;
            $am=(array)$am;
            $am['icon_class']=$am['icon'];
            $am['url']=$am['uri'];
            if($am['parent_id']>0) {
                $am['parent_id'] = $am['parent_id'] + 13;
            }
             unset($am['icon']);
             unset($am['uri']);
             unset($am['tree']);
             unset($am['id']);

            $menu=new MenuItem();

            $menu->create($am);
         //MenuItem::save($am);

        }

    }


}
