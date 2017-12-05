@extends('layouts.app')
@section('styles')

    <link rel="stylesheet" href="{{ asset('lib/layui/css/layui.css') }}">
    <link rel="stylesheet" href="{{ asset('static/im.css') }}">


@endsection
@section('content')
    <div style="padding:100px;">

    <vue-chat></vue-chat>
    </div>
@endsection


@section('scripts')

    <script src="{{ asset('lib/layui/layui.js') }}"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript">


        layui.use(['layer', 'form'], function () {
            var ajax = axios.create({
                baseURL: "",
                timeout: 5000,
                headers: {
                    'Accept': 'application/json',
                    //'Authorization': 'Bearer ' + window.App.access_token,
                    'X-CSRF-TOKEN': window.Laravel.csrfToken,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            $("#payFinish").click(function(){
                    ajax.post('/api/chat/order/pay', {orderid:App.order.id})
                    .then(function (res) {

                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            })


            $("#cancel").click(function(){
                ajax.post('/api/chat/order/cancel', {orderid:App.order.id})
                    .then(function (res) {

                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            })


        })
    </script>

@endsection