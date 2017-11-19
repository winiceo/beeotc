<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AddressRequest;
use App\Repositories\AddressRepository;
use Auth;
use Illuminate\Http\Request;
use App\Notifications\Receivedaddress as Received;

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
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\addressRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(AddressRequest $request)
    {
        $data = array_merge($request->all(), [
            'user_id' => Auth::user()->id
        ]);

        $address = $this->address->store($data);



        //$address->addressable->user->notify(new Received($address));

        return $this->response->item($address);
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
