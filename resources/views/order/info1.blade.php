@extends('layouts.app')
@section('styles')

    <link rel="stylesheet" href="{{ asset('lib/layui/css/layui.css') }}">

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
                        <div style="width: 700px;float:left;height: 500px;border:1px solid #d9d9d9;padding-bottom: 10px;position:relative;">
                            <div id="chat_content"
                                 style="width: 780px;height: 465px; overflow-y:scroll;overflow-x:hidden;">
                            </div>
                            <div style="width: 750px;overflow: hidden;position: absolute;bottom:0;margin-top: 10px;background: #fff;z-index: 99;padding-right: 30px;border-top:1px solid #e9e9e9;">
                                <div class="uploadpic" style="width:40px;padding-left:10px;float:left;">
                                    <iframe style="width:40px;height:40px;border:none;overflow:hidden;"
                                            src="/chat/upload?status=0&amp;orderid={{$order->id}}&amp;ordertype=1"></iframe>
                                </div>
                                <div class="contactcontent" style="width:600px;float:left;">
                                    <input type="text" id="saycontent" placeholder="说点什么吧..."
                                           style="width:590px;height:32px;line-height:32px;outline:none;font-size:14px;border:none;margin-top: 7px;">
                                </div>
                                <input type="hidden" id="chat_num" value="0">
                                <div class="chatsubmit" id='chatsubmit'
                                     style="width:60px;text-align:center;float:right;">
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

    <script src="{{ asset('lib/layui/layui.js') }}"></script>
    <script src="{{ asset('lib/RongIMLib-2.2.9.js') }}"></script>
    <script src="{{ asset('lib/im.js') }}"></script>
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
            var instance = null;

            function avatar(id){
                return "/user/avatar/"+id;
            }
            var callbacks = {

                getHistory:function(){
                    ajax.post('/api/chat/message/history', {order_id:App.order.id})
                        .then(function (res) {
                            var messages=res.data.data.data.data.reverse();
                            console.log(messages)
                            messages.forEach(function (message) {
                                callbacks.receiveNewMessage(JSON.parse(message.message));
                            })
                        })
                        .catch(function (err) {
                            console.log(err);
                        });



                },
                receiveNewMessage: function (message) {
                    var chatcontent = "";
                    if(message.content.extra.order_id!=App.order.id){
                        return false;
                    }

                    if (message.senderUserId == App.im_token.userId) {
                        if (message.messageType == "ImageMessage") {
                            chatcontent += '<div id="chat_content" style="width: 735px;"><div style="margin-top: 10px;width:735px;overflow: hidden;"><div style="float: right;width:50px;" class="right"><img src="' + avatar(message.senderUserId) + '" style="float: right;width:auto;border-radius: 4px 0 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;"/></div><div style="float: right;width:auto;border-radius: 4px 0 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="right">' + message.content.content + '<img src="' + message.content.imageUri + '"/></div></div></div>';
                        } else if (message.messageType == "TextMessage") {
                            chatcontent += '<div id="chat_content" style="width: 735px;"><div style="margin-top: 10px;width:735x;overflow: hidden;"><div style="float: right;width:50px;" class="right"><img src="' + avatar(message.senderUserId) + '" style="width:35px;border-radius: 50%;height: 35px;float:right"/></div><div style="float: right;width:auto;border-radius: 4px 0 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="right">' + message.content.content + '</div></div></div>';
                        }


                    } else {
                        if (message.messageType == "ImageMessage") {
                            chatcontent += '<div style="margin-top: 10px;width:735px;overflow: hidden;margin-left:15px;"><div style="float:left;width:50px;" class="left"><img src="' + avatar(message.senderUserId) + '" style="width:35px;border-radius: 50%;height: 35px;"/></div><div style="float: left;width:auto;border-radius: 0 4px 4px 4px;;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="left">' + message.content.content + '<img src="' + message.content.imageUri + '"/></div></div>';
                        } else if (message.messageType == "TextMessage") {
                            chatcontent += '<div style="margin-top: 10px;width:735px;overflow: hidden;"><div style="float:left;width:50px;margin-left:15px;" class="left"><img src="' + avatar(message.senderUserId) + '" style="width:35px;border-radius: 50%;height: 35px;float:right;"/></div><div style="float: left;width:auto;border-radius: 0 4px 4px 4px;background: #108ee9;color:#fff;font-size: 12px;line-height: 35px;text-align: right;padding:0 10px;" class="left">' + message.content.content + '</div></div>';

                        }
                    }


                    $("#chat_content").append(chatcontent);
                },
                getInstance: function (ist) {
                    instance = ist;

                    return ist
                }
            }

            BeeChat.init(callbacks)
            callbacks.getHistory();

            $("#chatsubmit").click(function () {
                var content = {
                    content: $("#saycontent").val(),
                    extra: {
                        "order_id": "{{$order->id}}"
                    }
                };

                var conversationtype = RongIMLib.ConversationType.PRIVATE; // 私聊
                var msg = new RongIMLib.TextMessage(content);
                var targetId = window.App.order_im_token.userId;

                instance.sendMessage(conversationtype, targetId, msg, {
                    onSuccess: function (message) {
                        //callbacks.receiveNewMessage(message)
                        $("#saycontent").val('')

                        ajax.post('/api/chat/message/send', message)
                            .then(function (res) {

                            })
                            .catch(function (err) {
                                console.log(err);
                            });


                    },
                    onError: function (errorCode, message) {
                        console.log("发送文字消息失败");
                        console.log(errorCode);
                    }
                });


            })

        })
    </script>

@endsection