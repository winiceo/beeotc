<?php

namespace App\Http\Controllers\Api;

use function App\Helpers\generate_code;
use function App\Helpers\username;
use App\Models\Menu;
use App\User;
use Illuminate\Http\Request;

use Illuminate\Contracts\Routing\ResponseFactory as ResponseFactoryContract;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use  Validator;
use Yunpian\Sdk\YunpianClient;
use Overtrue\EasySms\EasySms;
class NoticeController extends ApiController
{



    private $user;

    function index(Request $request, Auth $auth, $token = null) {

        return response()->ok('登录成功');
    }

    function sendSms(Request $request){


        $user=Auth::user();
        $mobile=$request->input("mobile");
        $code=generate_code(4);
        Redis::command('hset', ['safe_check', $mobile,$code]);

        //初始化client,apikey作为所有请求的默认值
        $clnt = YunpianClient::create(env("YUNPIAN_API"));

        $param = [YunpianClient::MOBILE => $mobile,YunpianClient::TEXT => '【币赢科技】 您的验证码是 '.$code];
        $r = $clnt->sms()->single_send($param);

        Log::info($r);
        return $this->setMsg('')->setData($r)->toJson();

    }


}
