@extends('layouts.web', ['bodyClass' => 'home'])

@section('body')
    <div id="container">



        <style>
            .clearfix:before, .clearfix:after {
                content: "";
                display: table;
            }

            .clearfix:after {
                clear: both;
            }

            .clearfix {
                clear: both;
                *zoom: 1;
            }

            .show {
                display: block !important;
            }

            .box {
                margin: 0px auto;
                overflow: hidden;
            }

            .ul_list {
                width: 100%;
                height: 40px;
                background: #f9f9f9;
            }

            .ul_list li {
                float: left;
                width: 200px;
                line-height: 40px;
                text-align: center;
                box-sizing: border-box;
                cursor: pointer;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.7);
            }

            .ul_list li.active {
                border-bottom: 2px solid #108ee9;
                color: #108ee9;
            }

            .ul_list li a {
                color: rgba(0, 0, 0, 0.9);
            }

            .usernewout .usncont .usnc_right .recharge_list {
                width: 100%;
                padding: 0;
            }

            .usernewout .usncont .usnc_right .rech_bd .rechmid .rechipt_box label {
                float: left;
                width: 100px;
            }

            .usernewout .usncont .usnc_right .rech_bd .rechmid {
                margin-top: 30px;
            }

            .usernewout .usncont .usnc_right {
                min-height: 750px;
            }

            .layui-layer-btn a.layui-layer-btn0 {
                background: #108ee9;
            }

            .layui-layer-btn a.layui-layer-btn1 {
                background: #ccc;
            }

            .layui-layer-setwin .layui-layer-close1 {
                width: 25px;
                height: 25px;
                background: url(/Public/Home/news/images/closebut.png) center no-repeat !important;
                background-size: 18px !important;
            }

            .layui-layer-setwin {
                right: 5px;
                top: 5px;
            }

            .usernewout .usncont .usnc_right {
                width: 1140px;
                padding: 0 30px;
            }
        </style>
        <div class="usernewout">
            <div class="top_monkey">
                <div class="topinfo">
                    <!-- <ul>
                            <li class="moneyinfo">
                                5.07557228 BTC 可用
                            </li>
                            <li class="moneyinfo">
                                0 BTC 冻结
                            </li>
                            <li class="moneyinfo">
                                5.07557228 BTC 总计
                            </li>
                        </ul><ul>
                            <li class="moneyinfo">
                                10 ETH 可用
                            </li>
                            <li class="moneyinfo">
                                0 ETH 冻结
                            </li>
                            <li class="moneyinfo">
                                10 ETH 总计
                            </li>
                        </ul><ul>
                            <li class="moneyinfo">
                                0 BCH 可用
                            </li>
                            <li class="moneyinfo">
                                0 BCH 冻结
                            </li>
                            <li class="moneyinfo">
                                0 BCH 总计
                            </li>
                        </ul> -->
                    <ul>
                        <li class="moneyinfo">
                            <h3 style="color:#eee;font-size: 14px;font-weight: normal;line-height: 40px;">BTC钱包余额：</h3>
                            <p class="p_new">可用：<span class="span_new">5.07557228 </span>
                                BTC</p>
                            <p class="p_new">冻结：<span class="span_new span_new1">0</span>
                                BTC</p>
                            <p class="p_new">总计：<span class="span_new span_new2">5.07557228</span>
                                BTC</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="moneyinfo">
                            <h3 style="color:#eee;font-size: 14px;font-weight: normal;line-height: 40px;">ETH钱包余额：</h3>
                            <p class="p_new">可用：<span class="span_new">10 </span>
                                ETH</p>
                            <p class="p_new">冻结：<span class="span_new span_new1">0</span>
                                ETH</p>
                            <p class="p_new">总计：<span class="span_new span_new2">10</span>
                                ETH</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="moneyinfo">
                            <h3 style="color:#eee;font-size: 14px;font-weight: normal;line-height: 40px;">BCH钱包余额：</h3>
                            <p class="p_new">可用：<span class="span_new">0 </span>
                                BCH</p>
                            <p class="p_new">冻结：<span class="span_new span_new1">0</span>
                                BCH</p>
                            <p class="p_new">总计：<span class="span_new span_new2">0</span>
                                BCH</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="usncont">
                <!-- 新改样式开始 -->
                <div class="box">
                    <ul class="ul_list clearfix">
                        <li class="active">
                            <a href="/Finance/index.html?act=zr&xnb=btc">充值比特币(BTC)</a>
                        </li>
                        <li>
                            <a href="/Finance/index.html?act=zc&xnb=btc">提现比特币(BTC)</a>
                        </li>
                        <li>
                            <a href="/Finance/index.html?act=zr&xnb=eth">充值以太坊(ETH)</a>
                        </li>
                        <li>
                            <a href="/Finance/index.html?act=zc&xnb=eth">提现以太坊(ETH)</a>
                        </li>
                        <li>
                            <a href="/Finance/index.html?act=zr&xnb=bch">充值比特币现金(BCH)</a>
                        </li>
                        <li>
                            <a href="/Finance/index.html?act=zc&xnb=bch">提现比特币现金(BCH)</a>
                        </li>
                    </ul>
                    <div class="div_box">
                        <div class="div_list" style="display:block;">
                            <div class="usnc_right">
                                <div class="rech_box">
                                    <div class="rech_bd nmt" style="padding-top: 30px;">
                                        <ul>
                                            <li>
                                                <div class="shiftto">
                                                    <p class="walletadres">这是您的钱包地址，请将您的 <b>比特币(BTC)</b> 充值此地址：</p>
                                                    <p id="wallet">HAVWUQ6ePdDqgPQZk8Jwk6E471YwXvandH</p>
                                                    <div id="qrcode-wallet">
                                                        <saon id="codeaa"></saon>
                                                        <p>比特币(BTC)钱包地址</p>
                                                    </div>
                                                </div>
                                                <div class="recharge_atten">
                                                    <h5>充值说明</h5>
                                                    <p>1. 温馨提示：在比特币(BTC)网络接收比特币(BTC)通常需要10分钟。我们会在收到比特币(BTC)网络2
                                                        个确认后给您入账。最低存入金额为0.0002 BTC，我们不会处理少于该金额的比特币(BTC)存入请求。</p>
                                                    <p>2.
                                                        此地址是您唯一且独自使用的充值地址，您可以同时进行多次充值。为了您的帐户安全，平台会不定期更新充值地址，并提前通知用户，请关注平台公告。</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="recharge_list">
                                        <div class="rech_list_top">
                                            <h4>充值记录</h4>
                                        </div>
                                        <table>
                                            <tr>
                                                <th>时间</th>
                                                <th>状态</th>
                                                <th>数量</th>
                                                <th>地址</th>
                                            </tr>
                                            <tr>
                                                <td colspan="4" class="chglist_top" style="text-align: center;">
                                                    暂无充值记录
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="pages"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="/Public/Home/js/jquery.qrcode.min.js"></script>
            <script type="text/javascript">
                $(function () {
                    $('.box .ul_list li').on('click', function () {
                        $(this).addClass('active').siblings('li').removeClass('active');
                        //获取当前li的索引
                        var n = $(this).index();
                        $('.div_box .div_list').eq(n).show().siblings('.div_list').hide();
                    });
                });
                $('#codeaa').qrcode({
                    render: "table", //table方式
                    width: 120, //宽度
                    height: 120, //高度
                    text: "HAVWUQ6ePdDqgPQZk8Jwk6E471YwXvandH" //任意内容
                }); //任意字符串

                $('#btn-submit').click(function () {
                    var mbTest_num = /^([1-9]{1}\d*)(\.(\d){1,2})?$/;
                    var mbTest_remark = /^(\w|[\u4E00-\u9FA5])*$/;
                    var type = $('#mycz_type option:selected').val();
                    var num = $("#mycz_amount").val();
                    if (type == "" || type == null) {
                        layer.tips('请选择充值方式', '#mycz_type', {tips: 3});
                        return false;
                    }
                    if (num == "" || num == null) {
                        layer.tips('请输入充值金额', '#mycz_amount', {tips: 3});
                        return false;
                    }
                    if (!mbTest_num.test(num)) {
                        layer.tips('充值金额格式错误 (人民币格式)', '#mycz_amount', {tips: 3});
                        return false;
                    }
                    $.post("/Mycz/index.html", {
                        type: type,
                        num: num
                    }, function (data) {
                        if (data.status == 1) {
                            layer.msg(data.info, {icon: 1});
                            window.setTimeout("window.location='/Mycz/log.html'", 3000);
                        } else {
                            layer.msg(data.info, {icon: 2});
                        }
                    }, "json");
                });

                var myzr = "";

                function closetanchu() {
                    layer.closeAll('loading');
                }

                $("#chkstyle").change(function () {
                    if ($(this).val() == "mobile") {
                        $("#mobile_div").show();
                        $("#email_div").hide();
                    } else if ($(this).val() == "email") {
                        $("#mobile_div").hide();
                        $("#email_div").show();
                    }
                });
                var myzc = "";

                $("#myzc_type").change(function () {
                    var coin = $("#myzc_type option:selected").val();
                    window.location = '/Finance/myzc/coin/' + coin + '.html';
                });

                $("#myzc_addr").change(function () {
                    var coin = $("#myzc_type option:selected").val();
                    var type = $("#myzc_addr option:selected").val();
                    if (type == 'tianjia') {
                        window.location = '/User/qianbao?coin=' + coin;
                    }
                });

                function tiaozhuan() {
                    var coin = $("#myzc_type option:selected").val();
                    window.location = '/Finance/myzc_user/coin/' + coin + '.html';
                }

                function SendCode() {
                    layer.load(0, {shade: [0.5, '#8F8F8F']});
                    $('#regBtn').attr("disabled", "disabled");
                    $.post("/Verify/myzc.html", {}, function (data) {
                        layer.closeAll();
                        if (data.status == 1) {
                            layer.msg(data.info, {icon: 1});
                            var obj = $('#regBtn');
                            var wait = 60;
                            var interval = setInterval(function () {
                                obj.css('backgroundColor', '#f6f6f6');
                                obj.val(wait + '秒再次发送');
                                wait--;
                                if (wait < 0) {
                                    $('#regBtn').removeAttr("disabled");
                                    clearInterval(interval);
                                    obj.val('获取验证码');
                                    obj.css('backgroundColor', '#f6f6f6');
                                }
                                ;
                            }, 1000);
                        } else {
                            //刷新验证码
                            layer.msg(data.info, {icon: 2});
                            $('#regBtn').removeAttr("disabled");
                            if (data.url) {
                                window.location = data.url;
                            }
                        }
                    }, "json");
                }

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

                function Update() {
                    var coin = "btc";
                    var addr = $('#myzc_addr option:selected').val();
                    var num = $("#nums").val();
                    var mobile_verify = $("#mobile_verify").val();
                    var paypassword = $("#paypassword").val();
                    var chkstyle = $("#chkstyle").val();
                    var email_verify = $("#email_verify").val();
                    var guga = 'null';
                    var ti_open = 1;

                    if (!chkstyle) {
                        layer.tips('您选择验证方式！', '#chkstyle', {
                            tips: 3
                        });
                        return false;
                    }
                    if (addr == "" || addr == null) {
                        layer.tips('请选择钱包', '#myzc_addr', {tips: 3});
                        return false;
                    }

                    if (chkstyle == 'mobile' && (mobile_verify == "" || mobile_verify == null)) {
                        layer.tips('请输入短信验证码', '#mobile_verify', {tips: 3});
                        return false;
                    }

                    if (chkstyle == 'email' && (email_verify == "" || email_verify == null)) {
                        layer.tips('请输入邮箱验证码', '#email_verify', {
                            tips: 3
                        });
                        return false;
                    }

                    if (num == "" || num == null) {
                        layer.tips('请输入提现数量', '#nums', {tips: 3});
                        return false;
                    }

                    if (paypassword == "" || paypassword == null) {
                        layer.tips('请输入交易密码', '#paypassword', {tips: 3});
                        return false;
                    }
                    if (ti_open == 1) {
                        var guga = $("#guga").val();
                        if (guga == '' || guga == 'null') {
                            layer.tips('请输入谷歌验证码', '#guga', {
                                tips: 3
                            });
                            return false;
                        }
                    }
                    layer.load(2);
                    $.post("/Finance/upmyzc.html", {
                        coin: coin,
                        addr: addr,
                        num: num,
                        paypassword: paypassword,
                        mobile_verify: mobile_verify,
                        token: myzc,
                        chkstyle: chkstyle,
                        email_verify: email_verify,
                        guga: guga
                    }, function (data) {
                        myzc = data.url;
                        layer.closeAll('loading');
                        if (data.status == 1) {
                            layer.msg(data.info, {icon: 1});
                            window.location.href = window.location.href;
                        } else {
                            layer.msg(data.info, {icon: 2});
                        }
                    }, "json");
                }

                $("#qianbao_type").change(function () {
                    var coin = $("#qianbao_type option:selected").val();
                    window.location = '/User/qianbao/coin/' + coin + '.html';
                });

                var coin = "btc";

                $("#city_1").citySelect({
                    nodata: "none",
                    required: false
                });

                $('#dialogBoxShadow').height($(document).height());

                function closeAddress() {
                    $("#withdrawCnyAddress").hide();
                    $("#dialogBoxShadow").hide();
                }

                function showA() {
                    $("#withdrawCnyAddress").show();
                    $("#dialogBoxShadow").show();
                }

                function addAddress() {
                    layer.open({
                        type: 1,
                        title: false,
                        closeBtn: 0,
                        area: 'autos',
                        skin: 'layui-layer-nobg', //没有背景色
                        shadeClose: true,
                        content: $('#withdrawCnyAddress')
                    });
                }

                function closeCharge() {
                    layer.closeAll();
                }

                function UpdateADD() {
                    var name = $('#qianbao_name').val();
                    var addr = $('#qianbao_addr').val();
                    var paypassword = $('#qianbao_paypassword').val();
                    if (name == "" || name == null) {
                        layer.tips('请输入钱包标识', '#qianbao_name', {tips: 3});
                        return false;
                    }
                    if (addr == "" || addr == null) {
                        layer.tips('请输入钱包地址', '#qianbao_addr', {tips: 3});
                        return false;
                    }
                    if (paypassword == "" || paypassword == null) {
                        layer.tips('请输入交易密码', '#qianbao_paypassword', {tips: 3});
                        return false;
                    }
                    $.post("/User/upqianbao.html", {
                        coin: coin,
                        name: name,
                        addr: addr,
                        paypassword: paypassword
                    }, function (data) {
                        if (data.status == 1) {
                            layer.msg(data.info, {icon: 1});
                            window.location = "/User/qianbao.html?coin=" + coin;
                        } else {
                            layer.msg(data.info, {icon: 2});
                            if (data.url) {
                                window.location = data.url;
                            }
                        }
                    }, "json");
                }
            </script>
            <div class="okcoinPop" id="withdrawCnyAddress" style="display: none;">
                <div class="tan_title">
                    <h4>添加钱包地址</h4>
                    <span class="closebut" onclick="closeCharge();"><img src="/Public/Home/news/images/closebut.png"></span>
                </div>
                <div class="dialog_content" id="dialog_content_CnyAddress">
                    <div class="dialog_body center">
                        <div style="line-height: 35px; text-align: left; padding-left:10px;">
                            <ul class="PopLayer">
                                <li>
                                    <span class="c2" id="lotteryAmountSpan1">币种名称 </span>
                                    <b class="khname">比特币(BTC)</b>
                                </li>
                                <li>
                                    <span class="c2" id="lotteryAmountSpan2">钱包标识 </span>
                                    <input name="name" id="qianbao_name" type="text" class="cztxinput">
                                </li>
                                <li>
                                    <span class="c2" id="lotteryAmountSpan3">钱包地址 </span>
                                    <input name="name" id="qianbao_addr" type="text" class="cztxinput">
                                </li>
                                <li>
                                    <span class="c2" id="lotteryAmountSpan4">交易密码 </span>
                                    <input name="name" id="qianbao_paypassword" type="password" class="cztxinput">
                                    <span style="display: block;text-align:left;margin-left:70px;width:340px;">
                                                    <a href="/Login/findpaypwd.html" class="reg_floatr"
                                                       style="color:#108ee9;font-size:13px;">忘记交易密码?</a>                        </span>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" onclick="UpdateADD()" class="btn" id="btn"
                                       style="">立即添加</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>

@endsection