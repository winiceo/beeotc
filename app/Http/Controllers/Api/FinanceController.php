<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\withdrawRequest;
use App\Repositories\withdrawRepository;
use Auth;
use Illuminate\Http\Request;
use App\Notifications\Receivedwithdraw as Received;
use Webpatser\Uuid\Uuid;

class FinanceController extends ApiController
{
    protected $withdraw;

    public function __construct(WithdrawRepository $withdraw)
    {
        parent::__construct();
        //$this->middleware('auth');

        $this->withdraw = $withdraw;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->response->collection($this->withdraw->page());
    }

    /**
     */
    public function withdraw(withdrawRequest $request)
    {


        $code =Uuid::generate()->string;


        $data = array_merge($request->all(), [
            'user_id' => 22,
            'order_code'=>$code

        ]);

       /// var_dump($data);
        $withdraw = $this->withdraw->store($data);

        $data=[
           "status"=>1,
            "info"=>'提现成功，正在处理中',
            "coin"=>1
        ];
        return $data;

        //$withdraw->withdrawable->user->notify(new Received($withdraw));

        return $this->response->item($withdraw);
    }


}
