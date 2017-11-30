@extends('layouts.app')
@section('styles')

    <link rel="stylesheet" href="{{ asset('lib/layui/css/layui.css') }}">
    <link rel="stylesheet" href="{{ asset('static/im.css') }}">

    <style>
        .usernewout .usncont .usnc_right {
            width: 1140px;
            padding: 0 30px 20px 30px;
        }

        .ad_left {
            width: 100%;
        }

        .ad_left .user_info {
            width: 100%;
            text-align: center;
        }

        .ul_add {
            display: inline-block;
            margin: 0 auto;
            overflow: hidden;
        }

        .ul_add li {
            float: left;
            width: 33px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.7);
            text-align: center;
        }

        .ul_add .li_new {
            width: 150px;
            height: 80px;
        }

        .ul_add .li_new1 {
            line-height: 40px;
            font-weight: bold;
        }

        .ul_add .li_new img {
            width: 40px;
        }

        .p_container {
            font-size: 16px;
            color: rgba(0, 0, 0, 0.7);
            text-align: left;
        }

        .table_div {
            background: #eff3f6;
            font-size: 16px;
            border-left: 3px solid #108ee9;
            margin: 40px 0 20px;
            color: rgba(0, 0, 0, 0.7);
            border-radius: 4px;
            line-height: 65px;
        }

        .table_div span {
            display: inline-block;
            padding: 0 10px;
        }

        .p_new {
            color: rgba(0, 0, 0, 0.7);
            font-size: 14px;
            line-height: 22px;
            margin: 10px 0 20px;
        }

        .span_new {
            font-size: 16px;
            color: #0d1212;
        }

        .button1 {
            outline: none;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: #108ee9;
            color: #fff;
            border-radius: 4px;
            border: none;
            padding: 0 10px;
            cursor: pointer;
            font-size: 14px;
        }

        .button2 {
            background: gray;
        }
    </style>

@endsection
@section('content')

    <div class="usernewout">
        <div class="usncont">
            <div class="usnc_right">
                <div class="usnc_order">
                    <div class="ad_left">
                        <div class="user_info">
                            <div>
                                <ul class="ul_add">
                                    <li class="li_new">
                                        <img src="/images/px.png" alt="">
                                        <br>
                                        已拍下
                                    </li>
                                    <li class="li_new1">→</li>
                                    <li class="li_new">
                                        <img src="/images/fk1.png" alt="">
                                        <br>待付款
                                    </li>
                                    <li class="li_new1">→</li>
                                    <li class="li_new">
                                        <img src="/images/sh1.png" alt="">
                                        <br>待收货
                                    </li>
                                    <li class="li_new1">→</li>
                                    <li class="li_new">
                                        <img src="/images/pj1.png" alt="">
                                        <br>待评价
                                    </li>
                                </ul>
                                <p class="p_container"><span
                                            style="font-size: 20px;">已拍下&nbsp;&nbsp;|&nbsp;&nbsp;</span>订单将在托管中保存60分钟，逾期未付款将自动取消
                                </p>
                            </div>
                        </div>
                        <div class="table_div">
                            <span style="font-weight: bold;color:#108ee9;">订单信息</span>
                            <span>交易价格:&nbsp;&nbsp; 54550.88CNY </span>
                            <span>交易数量: &nbsp;&nbsp;0.03666301BTC </span>
                            <span>交易金额:&nbsp;&nbsp; 2000.00CNY</span>
                        </div>
                        <!-- 新加左边区域开始 -->
                        <!-- 新加左边区域开始 -->
                        <div style="width: 700px;float:left;height: 700px;border:1px solid #d9d9d9;padding-bottom: 0px;position:relative;">
                             <vue-chat></vue-chat>
                        </div>
                        <!-- 新加左边区域结束 -->
                        <!-- 右边边区域-->
                        <div class="ad_right">
                            <div class="form-title pt-30">
                                <span class="form-name">交易操作</span>
                            </div>
                            <div class="line mt-20 mb-20"></div>
                            <p class="p_new">
                                <span class="span_new">订单编号</span>
                                15111641502253593 </p>
                            <p class="p_new">
                                <span class="span_new">付款方式<br></span>
                                现金存款 </p>
                            <p class="p_new">
                                <span class="span_new">买家留言<br></span>
                            </p>
                            <p class="p_new"><span class="span_new">交易条款</span><br>交易</p>
                            <div>
                                <!-- 交易订单单子只有买家可以付款取消 -->
                                <p class="p_new">
                                    <span class="span_new">交易提醒</span><br>
                                    1.对方的币已经被托管锁定，您需要在规定时间内完成付款并点击“标记为付款完成”，否则交易将被自动取消。<br>
                                    2.转账时请在留言里面附上订单编号，否则对方可能无法识别您的付款。<br>
                                    3.若您已经付款，如果对方未响应，不确认或者交易条款发生纠纷，您可以申诉此交易，申诉期内，币将有平台托管。
                                </p>
                                <button onclick="uptrade()" class="button1">标记已付款完成</button>
                                <button onclick="cancle()" class="button1 button2">取消交易</button>
                                <p class="p_new">交易遇到问题？如果对方未响应，不确认或者对交易条款发生纠纷，您可以申诉此交易，申诉期内，比特币将由平台托管。
                                </p>
                                <!-- 我是买家已经付款了 但是卖家不释放比特币 我要投诉 -->
                                <!-- 我是卖家 对方已经打款我需要释放比特币 -->
                                <!-- 相互评价区域 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')



@endsection