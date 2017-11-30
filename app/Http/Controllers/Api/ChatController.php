<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AdRequest;

use App\Models\Chat;
use App\Repositories\AdRepository;
use App\Repositories\OrderRepository;
use App\Repositories\TagRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ChatController extends ApiController
{

    protected $order;

    public function __construct()
    {
        //$this->middleware('auth');

    }


    public function send(Request $request, Chat $chat)
    {
        $message = $request->all();
        $data['order_id'] = $message['content']['extra']['order_id'];
        $data['message'] = \GuzzleHttp\json_encode($message);


        $chat->create($data);
        return $this->setMsg('添加成功')->setData(compact('message'))->toJson();

    }

    public function history(Request $request, Chat $chat){
        $data=$chat->where(function ($query) use ($request) {
                $order_id = $request->input('order_id', 1);
                $query->where('order_id', $order_id);

            })->orderBy('id', 'desc')
            ->paginate(20);
        return $this->setMsg('')->setData(compact('data'))->toJson();

    }


    public function store(Request $request,OrderRepository $orderRepository)
    {
        $data = array_merge($request->all(), [


            'status'       => 0
        ]);


        $order = $orderRepository->getById($data['orderid']);

        $user= Auth::user();
        $from_user_id=0;
        $to_user_id=0;
        if ($user->id == $order->ad_user_id) {

            $from_user_id=$order->ad_user_id;
            $to_user_id=$order->user_id;

        }
        if($user->id==$order->user_id){
            $from_user_id=$order->user_id;
            $to_user_id=$order->ad_user_id;

        }




        // $order_im_token = app('rcloud')->user()->getToken(env('RONG_CLOUD_ID_PRE') . $order->user->id, $order->user->name, $order->user->avatar);

        if($request->hasFile('upchatpic') && $request->file('upchatpic')->isValid()) {
            //获取上传的文件
            $file = $request->file('upchatpic');
            //$name = $file->getClientOriginalName();
            if ($store_result = $file->store('chat', 'public')) {

                return response()->json(['code' =>0,'file'=>'/storage/'.$store_result], 200);

//                $content=[
//                    "content"=>"ergaqreg",
//                    "imageUri"=>"/storage/".$store_result,
//                    "extra"=>["order_id"=>$order->id]
//                ];
//                $content=\GuzzleHttp\json_encode($content);
//
//                $ret=app('rcloud')->Message()->publishPrivate(env('RONG_CLOUD_ID_PRE') .$from_user_id,env('RONG_CLOUD_ID_PRE') .$to_user_id,'RC:ImgMsg', $content,'','','',0,1,1,1);
//
//
//                return response()->json(['success' => 'true'], 200);
            }
        }else{

            //todo
            return redirect()->back();
        }




        // $this->ad->store($data);
        exit;

        return redirect()->to('discussion');
    }


}
