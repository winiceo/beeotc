@extends('layouts.app')

@section('styles')
    <style>
        .usernewout .usncont {
            width: 1500px;
            height: auto;
            overflow: hidden;
            margin: 0 auto;
            padding: 30px 0;
            margin-bottom: 30px;
        }
         .usernewout .usncont .usnc_right {
            width: 1478px;
            min-height: 614px;
            height: auto;
            overflow: hidden;
            float: right;
            padding-bottom: 50px;
            background: #fff;
            border: 1px solid #e9e9e9;
        }
    </style>
@endsection

@section('content')

    <div class="">
        <div class="usernewout">


            <div class="usncont">
                <!--左侧菜单-->


                @yield('userright')

            </div>
        </div>
    </div>
@endsection