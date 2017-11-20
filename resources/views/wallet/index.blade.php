@extends('wallet.layout')

@section('userright')

    <div class="usnc_right">

        <wallet-add></wallet-add>
        <div class="recharge_list nmt">


            @include('wallet.address', ['addresss' => $user->addresss()->paginate(5)])

            {{ $addresss->links('pagination.default') }}


        </div>
    </div>
@endsection