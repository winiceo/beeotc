<?php
/**
 * Created by PhpStorm.
 * User: genv
 * Date: 2017/11/30
 * Time: 下午8:21
 */

namespace App\Service;


use App\Repositories\OrderRepository;

class OrderService
{
    protected $order;

    public function __construct($order)
    {

        $this->order = $order;

    }


    public function sellerSendMessage($content)
    {
        $from_user_id=$this->order->ad_user_id;
        $to_user_id=$this->order->user_id;


        $content = \GuzzleHttp\json_encode($content);

        $ret = app('rcloud')->Message()->publishPrivate(env('RONG_CLOUD_ID_PRE') . $from_user_id, env('RONG_CLOUD_ID_PRE') . $to_user_id, 'RC:TxtMsg', $content, '', '', '', 0, 1, 1, 1);
        return $ret;
    }

    public function buySendMessage($content){
        $from_user_id=$this->order->user_id;
        $to_user_id=$this->order->ad_user_id;


        $content = \GuzzleHttp\json_encode($content);

        $ret = app('rcloud')->Message()->publishPrivate(env('RONG_CLOUD_ID_PRE') . $from_user_id, env('RONG_CLOUD_ID_PRE') . $to_user_id, 'RC:TxtMsg', $content, '', '', '', 0, 1, 1, 1);
        return $ret;
    }
    //锁定币
    public function sellerlockOrder(){


    }

    //卖家解锁资金；
    public function sellerUnlockOrder(){

    }

}