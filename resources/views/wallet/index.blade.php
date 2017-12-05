@extends('wallet.layout')

@section('userright')
     <div class="usnc_right">
        <div style="padding-top: 20px;">
            <wallet-add coins='@json($coins)'></wallet-add>
        </div>

        @include('wallet.particals.blance', ['balances' => $user->wallets()->get()])


        <div class="recharge_list nmt">


            @include('wallet.address', ['addresss' => $user->addresss()->paginate(5)])

            {{ $addresss->links('pagination.default') }}


        </div>
    </div>
@endsection