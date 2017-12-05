<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AddressRequest;
use App\Repositories\AddressRepository;
use Auth;
use Validator;
use Illuminate\Http\Request;
use App\Notifications\Receivedaddress as Received;
use Illuminate\Support\Facades\Redis;

class AddressController extends ApiController
{
    protected $address;

    public function __construct(AddressRepository $address)
    {
        parent::__construct();

        $this->address = $address;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->response->collection($this->address->page());
    }

    /**
     * 保存钱包地址
     *
     * @param AddressRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'coin_type' => 'required',
            'wallet_address' => 'required',
            'mobile' => 'required',
            'mobile_code' => 'required',
        ]);
        $errors = $validator->errors();
        if($errors){
            foreach ($errors->all() as $message) {
                return $this->setMsg($message)->setCode(2001)->toJson();
            }
        }



        $data = array_merge($request->all(), [
            'user_id' => Auth::user()->id
        ]);
        $getCode=Redis::command('hget', ['safe_check', $data['mobile']]);


        if($getCode!=$data["mobile_code"]){
            return $this->setMsg('验证码错误'.$getCode.'-'.$data['mobile_code'])->setCode(2001)->toJson();
        }

        $ret=$this->address->getByaddress($data["wallet_address"]);
        if($ret){
            return $this->setMsg('此钱包地址已存在')->setCode(2002)->toJson();
        }
        $address = $this->address->store($data);

        return $this->setMsg('保存成功')->setData($address)->toJson();

    }

    /**
     * Display the specified resource.
     *
     * @param  int $addressableId
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $addressableId)
    {
        $addressableType = $request->get('addressable_type');
        $addresss = $this->address->getByaddressable($addressableId, $addressableType);

        return $this->response->collection($addresss);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        return $this->response->item($this->address->getById($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\addressRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(addressRequest $request, $id)
    {
        $this->address->update($id, $request->all());

        return $this->response->withNoContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->authorize('delete', $this->address->getById($id));

        $this->address->destroy($id);

        return $this->response->withNoContent();
    }
}
