<!DOCTYPE html>
<html lang="{{ App::getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ isset($title) ? $title.' | ' : '' }} {{ config('app.name') }}</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ mix('build/css/app.css') }}" rel="stylesheet">


    <link rel="stylesheet" href="/Public/Home/css/dfc.css"/>
    <link rel="stylesheet" type="text/css" href="/Public/Home/news/style/base.css">
    <link rel="stylesheet" type="text/css" href="/Public/Home/news/style/style.css">
    <link rel="stylesheet" type="text/css" href="/Public/Home/news/style/fb.css">
    <link rel="stylesheet" type="text/css" href="/Public/Home/news/style/index.css">
    <script type="text/javascript" src="/Public/Home/news/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="/Public/Home/news/js/jquery.SuperSlide.2.1.1.js"></script>
    <script type="text/javascript" src="/Public/layer/layer.js"></script>
    <script type="text/javascript" src="/Public/Home/js/jquery.cookies.2.2.0.js"></script>
    <script type="text/javascript" src="/Public/Home/js/jquery.flot.js"></script>
    <style type="text/css">
        .deal_list {
            position: absolute;
            left: -128px;
            background: #fff;
            z-index: 999999;
            border-bottom: 2px solid #f6554b;
            padding-bottom: 10px;
        }
        #menu_list_json img{vertical-align: middle;}
        .deal_list dl {
            width:360px;
            margin: 0 auto;
        }
        .deal_list dd {
            width: 150px;
            padding-left: 10px;
            height: 40px;
            line-height: 40px;
            float: left;
            font-size: 14px;
            color: #666;
            margin:10px 10px 0 10px;
        }
        .deal_list dd:hover{background: #f6554b;}
        .deal_list dd:hover a{color: #fff;}
        .nocontent {
            height: 34px;
            width:80px;
            position: absolute;
            left: 0;
            top: -34px;
        }
        .deal_list dd a {
            float: left;
            font-size: 12px;
        }
        .hdmenu ul li{font-size:16px;}
        .hdmenu ul li a{display: block;height: 100%;position: relative;}
        .logo{float:left;width:200px;height:64px;line-height:64px;}
        .logo img{vertical-align:middle;}
        .deal_list_pic_cny img{width:15px;height:15px;}
        .hdmenu{float:left;width:680px;height:62px;text-align:left;}
        .header_dz{float: right;height: 64px;position: relative;}
        .select_index{display: inline-block;text-align: center;padding:0px 10px;border:1px solid #ccc;height: 26px;border-radius: 4px;margin-right: 10px;margin-top:19px;line-height:26px;position:relative;}
        .select_index:hover{border:1px solid #108ee9;cursor: pointer;}
        .dl_index{display: inline-block;text-align: center;padding:0 7px;border:1px solid #ccc;height: 26px;border-radius: 4px;margin-right: 10px;margin-top:19px;line-height: 26px;font-size: 14px;}
        .dl_index a{color:rgba(0, 0, 0, 0.65);}
        .dl_index:hover{border:1px solid #108ee9;}
        .dl_index:hover a{color:#108ee9;}
        .zc_index{display: inline-block;text-align: center;padding:0 7px;border:1px solid #108ee9;height: 26px;border-radius: 4px;margin-right: 10px;margin-top:19px;line-height: 26px;font-size: 14px;width: 32px;background: #108ee9;}
        .zc_index a{color:#fff;}
        .zc_index:hover{background:#49a9ee;border:1px solid #49a9ee;}
        .header_dz .dl_index.current_new{border:1px solid #108ee9;}
        .header_dz .dl_index.current_new a{color:#108ee9;}
        .header_dz .zc_index.current_new2{background:#49a9ee;border:1px solid #49a9ee;}
        .ts{width:50px;height:34px;line-height:34px;text-align: center;color: #fff;background: rgba(0, 0, 0, 0.75);border-radius: 4px;display:none;position: absolute;top:63px;right:4px;}
        .dl_index_ts:hover .ts{display: block;}
        /*#neworder{position:absolute;top:-20px;right:-20px;font-size:11px;color:red;}*/
        .select_index_DD{width: auto;padding:0 10px;}
    </style>


    <script>
        window.Laravel = {!! json_encode(['csrfToken' => csrf_token()]) !!};
    </script>

    @include('layouts._favicons')
    @include('layouts._google_analytics')
    @include('layouts._ads._ad_sense')
</head>
<body class="{{ $bodyClass ?? '' }}">

<div id="app">
    @include('layouts._header')

    @yield('body')

    @include('layouts._footer1')
</div>

<script src="{{ mix('build/js/app.js') }}"></script>

@include('layouts._intercom')

</body>
</html>
