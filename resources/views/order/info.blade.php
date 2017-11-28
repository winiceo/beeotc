@extends('layouts.app')
@section('styles')

    <link rel="stylesheet" href="{{ asset('lib/layui/css/layui.css') }}">

    <style>
        .usernewout .usncont .usnc_right{width:1140px;padding: 0 30px 20px 30px;}
        .ad_left{width:100%;}
        .ad_left .user_info{width:100%;text-align: center;}
        .ul_add{display: inline-block;margin:0 auto;overflow: hidden;}
        .ul_add li{float: left;width:33px;font-size: 16px;color:rgba(0,0,0,0.7);text-align: center;}
        .ul_add .li_new{width:150px;height: 80px;}
        .ul_add .li_new1{line-height:40px;font-weight: bold;}
        .ul_add .li_new img{width: 40px;}
        .p_container{font-size: 16px;color:rgba(0,0,0,0.7);text-align: left;}
        .table_div{background: #eff3f6;font-size: 16px;border-left: 3px solid #108ee9;margin:40px 0 20px;color:rgba(0,0,0,0.7);border-radius: 4px;line-height: 65px;}
        .table_div span{display: inline-block;padding:0 10px;}
        .p_new{color:rgba(0,0,0,0.7);font-size: 14px;line-height: 22px;margin:10px 0 20px;}
        .span_new{font-size: 16px;color: #0d1212;}
        .button1{outline: none;height: 30px;line-height: 30px;text-align: center;background: #108ee9;color: #fff;border-radius:4px;border:none;padding:0 10px;cursor:pointer;font-size: 14px;}
        .button2{background: gray;}
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
                                        已拍下</li>
                                    <li class="li_new1">→</li>
                                    <li class="li_new">
                                        <img src="/images/fk1.png" alt="">
                                        <br>待付款</li>
                                    <li class="li_new1">→</li>
                                    <li class="li_new">
                                        <img src="/images/sh1.png" alt="">
                                        <br>待收货</li>
                                    <li class="li_new1">→</li>
                                    <li class="li_new">
                                        <img src="/images/pj1.png" alt="">
                                        <br>待评价</li>
                                </ul>
                                <p class="p_container"><span style="font-size: 20px;">已拍下&nbsp;&nbsp;|&nbsp;&nbsp;</span>订单将在托管中保存60分钟，逾期未付款将自动取消</p>
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
                        <div style="width: 700px;float:left;height: 500px;border:1px solid #d9d9d9;padding-bottom: 10px;position:relative;">
                            <div id="chat_content" style="width: 780px;height: 465px; overflow-y:scroll;overflow-x:hidden;">
                            </div>
                            <div style="width: 750px;overflow: hidden;position: absolute;bottom:0;margin-top: 10px;background: #fff;z-index: 99;padding-right: 30px;border-top:1px solid #e9e9e9;">
                                <div class="uploadpic" style="width:40px;padding-left:10px;float:left;">
                                    <iframe style="width:40px;height:40px;border:none;overflow:hidden;" src="/Order/inupload.html?status=0&amp;orderid=49&amp;ordertype=1"></iframe>
                                </div>
                                <div class="contactcontent" style="width:600px;float:left;">
                                    <input type="text" id="saycontent" placeholder="说点什么吧..." style="width:590px;height:32px;line-height:32px;outline:none;font-size:14px;border:none;margin-top: 7px;">
                                </div>
                                <input type="hidden" id="chat_num" value="0">
                                <div class="chatsubmit" id='chatsubmit'  style="width:60px;text-align:center;float:right;">
                                    <img src="/images/fs.png" alt="" width="35" style="margin-top: 5px;">
                                </div>
                            </div>
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
                                15111641502253593      					</p>
                            <p class="p_new">
                                <span class="span_new">付款方式<br></span>
                                现金存款						</p>
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
                                <button onclick="uptrade()" class="button1">标记已付款完成 </button>
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

    <script src="{{ asset('lib/layui/layui.js') }}"></script>

    <script type="text/javascript">


        layui.use(['layer', 'form'], function() {

            //提交聊天
            var chatordertoken = "c831992617e6f645c566601b71d20e4a";
             $("#chatsubmit").click(function  () {
                var content = $("#saycontent").val();
                if (content == "" || content == null) {
                    layer.alert("发送内容不能为空！");
                }
                var ordertype = "1";
                var orderid = "{{$order->id}}}";
                var status = 1;
                $.post("/api/chat/sendmessage", {
                    content: content,
                    chatpic: "",
                    ordertype: ordertype,
                    orderid: orderid,
                    token: chatordertoken,
                    status: status
                }, function (data) {
                    if (data.status == 1) {
                        $("#saycontent").val('');
                        chatordertoken = data.url;
                    } else {
                        layer.msg(data.info, {icon: 2});
                        chatordertoken = data.url;
                    }
                }, "json");
            })

            //获取聊天记录
            var userid = "1";
            var t;

            function getChat() {
                var chatnum = $("#chat_num").val();
                var orderid = "51";
                var ordertype = "1";
                var status = 1;
                $.getJSON("/api/chat/getmessage?orderid=" + orderid + "&ordertype=" + ordertype + "&chatnum=" + chatnum + "&status=" + status + "&t=" + Math.random(), function (data) {
                    if (data) {
                        var chatcontent = "";
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].touid == userid) {
                                if (data[i].addon) {
                                    chatcontent += '<div style="margin-top: 10px;width:735px;overflow: hidden;margin-left:15px;"><div style="float:left;width:50px;" class="left"><img src="' + data[i].fromuser + '" style="width:35px;border-radius: 50%;height: 35px;"/></div><div style="float: left;width:auto;border-radius: 0 4px 4px 4px;;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="left">' + data[i].content + '<img src="' + data[i].addon + '"/></div></div>';
                                } else {
                                    chatcontent += '<div style="margin-top: 10px;width:735px;overflow: hidden;"><div style="float:left;width:50px;margin-left:15px;" class="left"><img src="' + data[i].fromuser + '" style="width:35px;border-radius: 50%;height: 35px;float:right;"/></div><div style="float: left;width:auto;border-radius: 0 4px 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="left">' + data[i].content + '</div></div>';
                                }
                                chatnum++;
                            } else {
                                if (data[i].addon) {
                                    chatcontent += '<div id="chat_content" style="width: 735px;"><div style="margin-top: 10px;width:735px;overflow: hidden;"><div style="float: right;width:50px;" class="right"><img src="' + data[i].fromuser + '" style="float: right;width:auto;border-radius: 4px 0 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;"/></div><div style="float: right;width:auto;border-radius: 4px 0 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="right">' + data[i].content + '<img src="' + data[i].addon + '"/></div></div></div>';
                                } else {
                                    chatcontent += '<div id="chat_content" style="width: 735px;"><div style="margin-top: 10px;width:735x;overflow: hidden;"><div style="float: right;width:50px;" class="right"><img src="' + data[i].fromuser + '" style="width:35px;border-radius: 50%;height: 35px;float:right"/></div><div style="float: right;width:auto;border-radius: 4px 0 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="right">' + data[i].content + '</div></div></div>';
                                }
                                chatnum++;
                            }
                        }
                        $("#chat_num").val(chatnum);
                        $("#chat_content").append(chatcontent);
                    }
                });
                t = setTimeout(function () {
                    getChat()
                }, 2000);
            }

            $(document).ready(function () {
                getChat();
                markread();
            });

            //标记已读
            function markread() {
                $.post("/Order/markRead.html", {
                    orderid: "51",
                    ordertype: "1"
                }, function (data) {

                }, "json");
                setTimeout(function () {
                    markread()
                }, 3000);
            }

            var type = 1;
            var id = 51;
            var xdctoken = 'c831992617e6f645c566601b71d20e4a';
            var bjtoken = 'c831992617e6f645c566601b71d20e4a';
            var sfbtoken = 'c831992617e6f645c566601b71d20e4a';
            var ddsstoken = 'c831992617e6f645c566601b71d20e4a';
            var pjtoken = 'c831992617e6f645c566601b71d20e4a';

            function cancle() {
                $.post("/Order/ordercancle_ajax.html", {
                    type: type,
                    id: id,
                    token: xdctoken,

                }, function (data) {
                    layer.closeAll('loading');
                    if (data.status == 1) {

                        layer.alert(data.info, function (index) {
                            self.location.reload();
                        });

                    } else {
                        xdctoken = data.url;
                        layer.msg(data.info, {icon: 2});

                    }
                }, "json");
            }

            function uptrade() {
                $.post("/Order/uptrade_ajax.html", {
                    type: type,
                    id: id,
                    token: bjtoken,

                }, function (data) {
                    layer.closeAll('loading');
                    if (data.status == 1) {

                        layer.alert(data.info, function (index) {
                            self.location.reload();
                        });

                    } else {
                        bjtoken = data.url;
                        layer.msg(data.info, {icon: 2});

                    }
                }, "json");
            }

            function sfbtc() {
                layer.config({
                    extend: 'extend/layer.ext.js'
                });
                layer.ready(function () {
                    layer.prompt({
                        title: '输入交易密码，并确认',
                        formType: 1
                    }, function (val) {
                        if (val) {

                            $.post("/Order/sfbtc_ajax.html", {
                                type: type,
                                id: id,
                                token: sfbtoken,
                                paypassword: val

                            }, function (data) {
                                layer.closeAll('loading');
                                if (data.status == 1) {

                                    layer.alert(data.info, function (index) {
                                        self.location.reload();
                                    });

                                } else {
                                    sfbtoken = data.url;
                                    layer.msg(data.info, {icon: 2});

                                }
                            }, "json");
                        }
                        ;
                    });
                });
            }

            //重启交易
            function chongqi() {
                $.post("/Order/chongqi_ajax.html", {
                    type: type,
                    id: id,
                    token: bjtoken,

                }, function (data) {
                    layer.closeAll('loading');
                    if (data.status == 1) {

                        layer.alert(data.info, function (index) {
                            self.location.reload();
                        });

                    } else {
                        bjtoken = data.url;
                        layer.msg(data.info, {icon: 2});

                    }
                }, "json");
            }

            function tijiaopj() {

                var pj = $("input[type='radio']:checked").val();
                if (!pj) {
                    layer.alert("请选择评价类型");
                    return;
                }
                if (pj != 1 && pj != 2 && pj != 3) {
                    layer.alert("评价类型只能选择好评中评差评");
                    return;
                }

                $.post("/Order/comment_ajax.html", {
                    type: type,
                    id: id,
                    pj: pj,
                    token: pjtoken
                }, function (data) {
                    layer.closeAll('loading');
                    if (data.status == 1) {

                        layer.alert(data.info, function (index) {
                            self.location.reload();
                        });

                    } else {
                        layer.msg(data.info, {icon: 2});
                        pjtoken = data.url;
                    }
                }, "json");
            }

            $("#shensu").click(function () {
                if ($(this).html() == "申诉") {
                    $("#shensu").html("收起");
                    $("#reason").show();
                } else if ($(this).html() == "收起") {
                    $("#shensu").html("申诉");
                    $("#reason").hide();
                }
            });

            function tijiaoreason() {
                var sutype = $('#sutype').val();
                var cont = $('#content').val();
                var sutp = $("#sutp").val();
                if (cont == '') {
                    layer.alert('请输入申诉内容');
                    return;
                }
                var formData = new FormData($("form")[0]);
                formData.append("token", ddsstoken);
                $.ajax({
                    url: "/Order/shensu_ajax.html",
                    type: 'POST',
                    data: formData,
                    dataType: 'json',
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        layer.closeAll('loading');
                        if (data.status == 1) {
                            layer.alert(data.info, function (index) {
                                self.location.reload();
                            });
                        } else {
                            ddsstoken = data.url;
                            layer.msg(data.info, {icon: 2});
                        }
                    }
                });
            }

        })
</script>

@endsection