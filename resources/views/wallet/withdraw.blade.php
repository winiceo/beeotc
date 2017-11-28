@extends('layouts.app')
@section('styles')
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
        #neworder{background-color: rgb(255, 0, 0);font-size: 12px;display: inline-block;width: 16px;height: 16px;text-align: center;line-height: 16px;vertical-align: middle;border-radius: 50%;margin-top: -3px;margin-left: 5px;display: none;color:#fff;}
        .select_index_DD{width: auto;padding:0 10px;}
        .usernewout .usncont .usnc_right {
            width: 1078px;
        }
    </style>

@endsection
@section('content')
    <div class="usernewout">
         <div class="usncont">
            <!-- 新改样式开始 -->
            <div class="box">

                <div class="div_box">
                    <div class="div_list" style="display:block;">
                        <div class="usnc_right">
                            <div class="rech_box">
                                <div class="rech_bd nmt" style="text-align: center;padding-top: 30px;">
                                    <ul>
                                        <li>
                                            <div class="rechmid">
                                                <div class="rechipt_box">
                                                    <label>提现地址：</label>
                                                    <input type="text" name="coin_type" readonly value="{{$address->wallet_address}}"></p>
                                                 </div>

                                                <div class="rechipt_box">
                                                    <label>提现地址：</label>
                                                    <input type="text" id="address" readonly value="{{$address->wallet_address}}"></p>
                                                 </div>
                                                <div class="rechipt_box">
                                                    <label>提现数量：</label>
                                                    <div class="iptbox">
                                                        <input type="text" value="" class="rechipt" id="amount">
                                                    </div>
                                                </div>
                                                <div class="rechipt_box" style="display:none;">
                                                    <label>验证方式：</label>
                                                    <div class="iptbox">
                                                        <select id="chkstyle" class="rechipt" style="width:358px;">
                                                            <option value="email">邮箱验证</option>
                                                            <!-- <option value="">请选择验证方式</option>
                                                            <option value="mobile">手机号码验证</option> -->
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="rechipt_box" id="mobile_div" style="display:none;">
                                                    <label>短信验证码：</label>
                                                    <div class="iptbox">
                                                        <input type="text" id="mobile_verify" value="" class="rechipt halfipt">
                                                        <input type="button" id="regBtn" onclick="SendCode()" value="获取手机验证码" class="yzmbut">
                                                        <p class="attention">* 接收短信的手机</p>
                                                    </div>
                                                </div>
                                                <div class="rechipt_box" id="email_div" style="display:block;">
                                                    <label>邮箱验证码：</label>
                                                    <div class="iptbox">
                                                        <input type="text" id="email_verify" value="" class="rechipt halfipt" maxlength="6">
                                                        <input type="button" id="regBtn" onclick="EmCode()" value="获取邮箱验证码" class="yzmbut">
                                                        <p class="attention" style="color:#108ee9;">* 接收验证码的邮箱8888888888@qq.com</p>												  </div>
                                                </div>
                                                {{--<div class="rechipt_box">--}}
                                                    {{--<label>交易密码：</label>--}}
                                                    {{--<div class="iptbox">--}}
                                                        {{--<input type="password" value="" class="rechipt" id="paypassword" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);" autocomplete="off">--}}
                                                        {{--<p class="attention" style="color:#108ee9;">*--}}
                                                            {{--<a href="/Login/findpaypwd.html" class="orange" style="color:#108ee9;">忘记交易密码</a>													</p>--}}
                                                    {{--</div>--}}
                                                {{--</div>--}}
                                                <div class="rechipt_box" style="margin-left: 116px;">
                                                    <div class="iptbox">
                                                        <input type="button" value="提交提现申请" class="rechbut savebtn" >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="recharge_atten" style="text-align: left;">
                                                <h5>提现须知</h5>
                                                <p>温馨提示：在比特币(BTC)网络发送比特币(BTC)，通常需要10分钟，比特币(BTC)网络转账费为0.05%；系统会先审核后再广播到比特币(BTC)网络，正在处理中代表平台正在审核中，处理完毕的您可以在交易明细中查看到转账详情。</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 新调位置 -->
                            <div class="recharge_list">

                                @include('wallet.withdrawtable')

                                {{ $withdraws->links('pagination.default') }}

                            </div>
                            <!-- 新调位置结束 -->
                        </div>
                        <!-- <div class="recharge_list">
                            <div class="rech_list_top">
                                <h4>提现记录</h4>
                            </div>
                            <table>
                                <tr>
                                    <th width="200px">提现时间</th>
                                    <th width="340px">接收地址</th>
                                    <th width="140px">提现数量</th>
                                    <th width="140px">手续费</th>
                                    <th width="140px">实际到帐</th>
                                    <th>状态</th>
                                </tr>
                                                            </table>
                            <div class="pages"></div>
                        </div> -->					</div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('lib/layui/layui.js') }}"></script>

    <script type="text/javascript">


        layui.use(['layer', 'form'], function() {

            var myzc=''
            function EmCode() {
                var chkstyle = $("#chkstyle").val();
                if (!chkstyle || chkstyle != 'email') {
                    layer.tips('您选择的验证方式不是邮箱验证', '#chkstyle', {
                        tips: 3
                    });
                    return false;
                }
                layer.load(0, {shade: [0.5, '#8F8F8F']});
                $('#regBtn').attr("disabled", "disabled");
                $.post("/Verify/myzcemail.html", {}, function (data) {
                    layer.closeAll();
                    if (data.status == 1) {
                        layer.msg(data.info, {
                            icon: 1
                        });
                        var obj = $('#regBtn');
                        var wait = 120;
                        var interval = setInterval(function () {
                            obj.css('backgroundColor', '#f6f6f6');
                            obj.val(wait + '秒再次发送');
                            wait--;
                            if (wait < 0) {
                                obj.removeAttr("disabled");
                                clearInterval(interval);
                                obj.val('获取验证码');
                                obj.css('backgroundColor', '#f6f6f6');
                            }
                            ;
                        }, 1000);
                    } else {
                        $('#regBtn').removeAttr("disabled");
                        layer.msg(data.info, {
                            icon: 2
                        });
                    }
                }, "json");
            }

            function Save() {
                var coin = "btc";
                var addr = $('#address').val();
                var num = $("#amount").val();
                var mobile_verify = $("#mobile_verify").val();
                var paypassword = $("#paypassword").val();
                var chkstyle = $("#chkstyle").val();
                var email_verify = $("#email_verify").val();
                var guga = 'null';
                var ti_open = 0;

//            if(!chkstyle){
//                layer.tips('您选择验证方式！', '#chkstyle', {
//                    tips: 3
//                });
//                return false;
//            }
//            if (addr == "" || addr == null) {
//                layer.tips('请选择钱包', '#myzc_addr', {tips: 3});
//                return false;
//            }

                if (chkstyle == 'mobile' && (mobile_verify == "" || mobile_verify == null)) {
                    layer.tips('请输入短信验证码', '#mobile_verify', {tips: 3});
                    return false;
                }

//            if (chkstyle == 'email' && (email_verify == "" || email_verify == null)) {
//                layer.tips('请输入邮箱验证码', '#email_verify', {
//                    tips: 3
//                });
//                return false;
//            }

                if (num == "" || num == null) {
                    layer.tips('请输入提现数量', '#nums', {tips: 3});
                    return false;
                }

//            if (paypassword == "" || paypassword == null) {
//                layer.tips('请输入交易密码', '#paypassword', {tips: 3});
//                return false;
//            }
//            if(ti_open==1){
//                var guga = $("#guga").val();
//                if(guga=='' ||guga=='null'){
//                    layer.tips('请输入谷歌验证码', '#guga', {
//                        tips: 3
//                    });
//                    return false;
//                }
//            }

                layer.load(2);

                $.ajax({
                    type: 'POST',
                    url: "/api/finance/withdraw",
                    headers: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: {
                        coin_type: coin,
                        address: addr,
                        amount: num,
                        paypassword: paypassword,
                        mobile_verify: mobile_verify,
                        token1: myzc,
                        chkstyle: chkstyle,
                        email_verify: email_verify,
                        guga: guga
                    }
                }).done(function(data) {
                    myzc = data.url;
                    layer.closeAll('loading');
                    if (data.status == 1) {
                        layer.msg(data.info, {icon: 1});
                        window.location.href = window.location.href;
                    } else {
                        layer.msg(data.info, {icon: 2});
                    }
                });
//               alert(a)
//                //layer.load(2);
//                $.post("/api/finance/withdraw", {
//                    coin_type: coin,
//                    address: addr,
//                    amount: num,
//                    paypassword: paypassword,
//                    mobile_verify: mobile_verify,
//                    token1: myzc,
//                    chkstyle: chkstyle,
//                    email_verify: email_verify,
//                    guga: guga
//                }, function (data) {
//                    myzc = data.url;
//                    //layer.closeAll('loading');
//                    if (data.status == 1) {
//                        layer.msg(data.info, {icon: 1});
//                        window.location.href = window.location.href;
//                    } else {
//                        layer.msg(data.info, {icon: 2});
//                    }
//                }, "json");
            }

            $(".savebtn").click(Save)

        });
    </script>

@endsection