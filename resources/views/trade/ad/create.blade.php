@extends('layouts.web', ['bodyClass' => 'home'])

@section('body')
    <div id="container">
    <script>
        function chatNum(id, orderid, ordertype) {
            $.getJSON("/Ajax/chatNum?orderid=" + orderid + "&ordertype=" + ordertype, function (data) {
                if (data > 0) {
                    $("#" + id).html("（" + data + "）");
                }
            });
            setTimeout(function () {
                chatNum(id, orderid)
            }, 3000);
        }

        //新改
        $('#trade_box').mouseover(function () {
            $(".deal_list").show();
        });
        $(".hdmenu ul").mouseleave(function () {
            $(".deal_list").hide();
        });
        $('.deal_list').hover(function () {
            $('.deal_list').show()
        });
        $('#user-finance').hover(function () {
            $('.mywallet_list').show();
        }, function () {
            $('.mywallet_list').hide()
        });
    </script>
    <style>
        .usernewout .usncont {
            background: #fff;
            margin-top: 30px;
        }

        .usernewout .usncont .usnc_right {
            width: 1120px;
            float: left;
            margin-left: 40px;
            border: none;
        }

        .usernewout .usncont .usnc_right .leftmoney {
            width: 100%;
        }

        .usernewout .usncont .usnc_right h1 {
            font-size: 30px;
            padding: 0;
            text-indent: 0;
            border-bottom: 0;
        }

        .p_new {
            color: rgba(0, 0, 0, .7);
            font-size: 16px;
            margin-bottom: 10px;
            margin-top: 30px;
        }

        .h4_new {
            color: rgba(0, 0, 0, .7);
            font-size: 20px;
            line-height: 43px;
            font-weight: normal;
        }

        .input_new {
            font-size: 15px;
            color: rgba(0, 0, 0, .7);
            margin-right: 24px;
        }

        .input_new input {
            margin-right: 5px;
        }

        .usernewout .usncont .usnc_right .rech_bd .rechmid .rechipt_box {
            position: relative;
        }

        .cur {
            position: absolute;
            right: 239px;
            top: 77px;
        }

        .line {
            width: 100%;
            height: 1px;
            background: #e5eaef;
        }
    </style>
    <div class="usernewout">
        <div class="usncont">
            <div class="usnc_right">
                <h1>发布一个虚拟币交易广告</h1>
                <div class="leftmoney">
                    如果您经常交易虚拟币，可以发布自己的虚拟币交易广告。
                    <br/>如果您只想购买或出售一次，我们建议您直接从购买或出售列表中下单交易。
                    <br/>
                    发布一则交易广告是免费的。
                    <br/>
                    发布交易广告的 CoinWord 用户每笔完成的交易需要缴纳 0.5% 的费用。<br/>
                    您必须在交易广告或交易聊天中提供您的付款详细信息，发起交易后，价格会锁定，除非定价中有明显的错误。<br/>
                    所有交流必须在 CoinWord 上进行，请注意高风险有欺诈风险的付款方式。<br/>
                    <a href="/User/nameauth.html" style="color:#108ee9;">身份验证</a>成功后您的广告才会显示在交易列表中。
                </div>
                <div class="rech_box">
                    <div class="rech_bd nmt">


                        <div class="rechmid">
                            <h4 class="h4_new">交易类型</h4>
                            <p class="line"></p>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>交易币种: <span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;">请选择你要发布广告的币种。</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <select id="coin" class="rechipt"
                                            style="width:572px;height:50px;color:rgba(0,0,0,.7);">
                                        <option value="3">BTC 比特币</option>
                                        <option value="4">ETH 以太坊</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>选择广告类型: </p>
                                <div>
                                    <label class="input_new"><input id="sell" name="type" type="radio" value="1"
                                                                    checked/>在线出售虚拟币 </label>
                                    <label class="input_new"><input id="buy" name="type" type="radio" value="0"/>在线购买虚拟币
                                    </label>
                                </div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>所在地: <span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;">请选择你要发布广告的国家。</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <select id="location" class="rechipt"
                                            style="width:572px;height:50px;color:rgba(0,0,0,.7);">
                                        <option value="1">CN 中国</option>
                                        <option value="2">US 美国</option>
                                        <option value="3">AU 澳大利亚</option>
                                        <option value="4">JP 日本</option>
                                        <option value="5">KR 韩国</option>
                                        <option value="6">CA 加拿大</option>
                                        <option value="7">FR 法国</option>
                                        <option value="8">IN 印度</option>
                                        <option value="9">RU 俄罗斯</option>
                                        <option value="10">DE 德国</option>
                                        <option value="11">GB 英国</option>
                                        <option value="12">HK 香港</option>
                                        <option value="13">BR 巴西</option>
                                        <option value="14">ID 印尼</option>
                                        <option value="15">PH 菲律宾</option>
                                    </select>
                                </div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>货币: <span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;"> 您希望交易付款的货币类型。</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <select id="currency" class="rechipt"
                                            style="width:572px;height:50px;color:rgba(0,0,0,.7);">
                                        <option value="1">CNY 人民币</option>
                                        <option value="2">USD 美元</option>
                                        <option value="3">AUD 澳元</option>
                                        <option value="4">JPY 日元</option>
                                        <option value="5">KRW 韩币</option>
                                        <option value="6">CAD 加元</option>
                                        <option value="7">CHF 法郎</option>
                                        <option value="8">INR 卢比</option>
                                        <option value="9">RUB 卢布</option>
                                        <option value="10">EUR 欧元</option>
                                        <option value="11">GBP 英镑</option>
                                        <option value="12">HKD 港币</option>
                                        <option value="13">BRL 巴西雷亚尔</option>
                                        <option value="14">IDR 印尼盾</option>
                                        <option value="15">MXN 比索</option>
                                    </select>
                                </div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>溢价:<span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;"> 如果您想要比特币市场价格的溢价，您可以以高于市场价买入或低于市场价卖出的方式来并吸引更多的交易者。</span>
                                </p>
                                <div class="iptbox" style="width:600px;">
                                    <input id="margin" type="text" value="" class="rechipt"
                                           style="width: 562px;height: 48px;">
                                </div>
                                <div style="position: absolute;right:239px;top:77px;">%</div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>价格:<span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;"> 基于溢价比例得出的报价，10分钟更新一次。</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <input type="text" value="" class="rechipt" id="price" readonly="readonly"
                                           style="width: 562px;height: 48px;">
                                </div>
                                <div class="cur">CNY</div>
                            </div>
                            <div id="zuidi" class="rechipt_box">
                                <p class="p_new">最低价（选填）:
                                    <span style="color:rgba(0,0,0,0.7);font-size: 14px;"> 最低价格是为了您在动荡的市场中保持稳定收益，市场价格低于最低价格时，您的广告仍以最低价格展示出来。
</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <input type="text" value="" class="rechipt" id="min_price"
                                           style="width: 562px;height: 48px;">
                                </div>
                                <div class="cur" style="position: absolute;top:78px;">CNY</div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>最小限额: <span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;">一次交易的最低的交易限制。</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <input type="text" value="" class="rechipt" id="min_limit"
                                           style="width: 562px;height: 48px;">
                                </div>
                                <div class="cur">CNY</div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>最大限额: <span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;">一次交易中的最大交易限制，您的钱包余额也会影响最大量的设置。</span>
                                </p>
                                <div class="iptbox" style="width:600px;">
                                    <input type="text" value="" class="rechipt" id="max_limit"
                                           style="width: 562px;height: 48px;">
                                </div>
                                <div class="cur">CNY</div>
                            </div>
                            <div id="qixian" class="rechipt_box" style="display: none">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>付款期限: <span
                                            style="color:rgba(0,0,0,0.7);font-size: 14px;">您承诺在此期限内付款（分钟）</span></p>
                                <div class="iptbox" style="width:600px;">
                                    <input type="text" value="" class="rechipt" id="due_time">
                                </div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>收款方式:</p>
                                <div class="iptbox" style="width:600px;">
                                    <select id="pay_method" class="rechipt"
                                            style="width:572px;    height: 50px;color:rgba(0,0,0,.7)">
                                        <option value="1">现金存款</option>
                                        <option value="2">银行转账</option>
                                        <option value="3">支付宝</option>
                                        <option value="4">微信支付</option>
                                        <option value="5">iTunes礼品卡</option>
                                        <option value="6">Paytm</option>
                                        <option value="7">其它</option>
                                    </select>
                                </div>
                            </div>
                            <div class="rechipt_box">
                                <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>交易条款:</p>
                                <div class="iptbox"
                                     style="width: 532px;padding: 15px 20px;height: 110px;resize: none;line-height: 1.25;border:1px solid #d6dbdd;font-size: 14px;">
                                    <textarea id="message"
                                              style="resize: none;border:none;outline: none;color:rgba(0,0,0,0.7);"
                                              rows="5" cols="66" placeholder="有关您的交易的其他信息，比如您交易的相关条款和支付方式。"
                                              onfocus="this.placeholder=''"
                                              onblur="this.placeholder='有关您的交易的其他信息，比如您交易的相关条款和支付方式。'"></textarea>
                                </div>
                            </div>
                            <div>
                                <h4 class="h4_new">高级设置</h4>
                                <p class="line"></p>
                                <div>
                                    <p class="p_new">是否启用安全选项：<span style="color:rgba(0,0,0,0.7);font-size: 14px;">启用后，仅限于已验证身份证的用户与本广告交易。</span>
                                    </p>
                                    <div>
                                        <label class="input_new"><input name="safe_option" type="radio" value="1"/>启用
                                        </label>
                                        <label class="input_new"><input name="safe_option" type="radio" value="0"
                                                                        checked/>不启用 </label>
                                    </div>
                                </div>
                                <div>
                                    <p class="p_new">仅限受信任的交易者：<span style="color:rgba(0,0,0,0.7);font-size: 14px;">启用后，仅限于自己信任的用户与本广告交易。</span>
                                    </p>
                                    <div>
                                        <input name="trust_only" type="checkbox" value="1"
                                               style="vertical-align: middle;"/>
                                        <span style="font-size: 15px;color: rgba(0,0,0,.7);margin-right: 24px;vertical-align: middle;">启用</span>
                                    </div>
                                </div>
                                <div>
                                    <p class="p_new">开放时间：<span style="color:rgba(0,0,0,0.7);font-size: 14px;">您希望广告自动显示和隐藏的天数和小时数。</span>
                                    </p>
                                    <div>
                                        <span class="p_new" style="margin-right: 77px;">星期一:</span>
                                        <select name="mon_s"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="mon_e"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <div style="height: 10px;width:100%;"></div>
                                        <span class="p_new" style="margin-right: 77px;">星期二:</span>
                                        <select name="tue_s"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="tue_e"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <div style="height: 10px;width:100%;"></div>
                                        <span class="p_new" style="margin-right: 77px;">星期三:</span>
                                        <select name="wed_s"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="wed_e"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <div style="height: 10px;width:100%;"></div>
                                        <span class="p_new" style="margin-right: 77px;">星期四:</span>
                                        <select name="thu_s"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="thu_e"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <div style="height: 10px;width:100%;"></div>
                                        <span class="p_new" style="margin-right: 77px;">星期五:</span>
                                        <select name="fri_s"
                                                style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="fri_e"
                                                style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;padding-left: 10px;font-size: 16px;color:rgba(0,0,0,.7);">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <div style="height: 10px;width:100%;"></div>
                                        <span class="p_new" style="margin-right: 77px;">星期六:</span>
                                        <select name="sat_s"
                                                style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;padding-left: 10px;color:rgba(0,0,0,.7);">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="sat_e"
                                                style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);padding-left: 10px;">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <div style="height: 10px;width:100%;"></div>
                                        <span class="p_new" style="margin-right: 77px;">星期日:</span>
                                        <select name="sun_s"
                                                style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);padding-left: 10px;">
                                            <option value="a">开始时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                        <select name="sun_e"
                                                style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);padding-left: 10px;">
                                            <option value="a">结束时间</option>
                                            <option value="z">关闭</option>
                                            <option value="0">0:00</option>
                                            <option value="1">1:00</option>
                                            <option value="2">2:00</option>
                                            <option value="3">3:00</option>
                                            <option value="4">4:00</option>
                                            <option value="5">5:00</option>
                                            <option value="6">6:00</option>
                                            <option value="7">7:00</option>
                                            <option value="8">8:00</option>
                                            <option value="9">9:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                            <option value="24">24:00</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="rechipt_box">
                                <div class="iptbox mrl110" style="width: 600px;">
                                    <input type="button" value="立即发布" class="rechbut" onclick="Update()"
                                           style="background: #108eed;width:190px;border-radius: 4px;height:48px;margin-left: 297px;margin-top: 30px;">
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div>
    <script type="text/javascript">
        $("#coin").on('change change', function () {
            window.location.href = '?coinid=' + this.value;
        });

        $("#sell").click(function () {
            $("#qixian").hide();
            $("#zuidi").show();
        });
        $("#buy").click(function () {
            $("#qixian").show();
            $("#zuidi").hide();
        });

        var newad = "";
        var price = "45364.20514800";

        //$("#currency").change(function(){
        $("#currency").on('change change', function () {
            var currency_id = $(this).val();
            var coin_id = $('#coin').val();
            $.post("/Ajax/getCurrency.html", {
                id: currency_id,
                coin: coin_id
            }, function (data) {
                var shot_name = data.sname;
                price = data.pri;
                $(".cur").text(shot_name);
            }, "json");
        });

        //    $("#margin").keyup(function(){
        //        var margin = $('#margin').val();
        //        var sum = parseFloat(price)+parseFloat(price * margin/100);
        //        sum = sum.toFixed(2);
        //        $("#price").val(sum);
        //    });
        $("#margin").on('keyup change', function () {
            var margin = $('#margin').val();
            var sum = parseFloat(price) + parseFloat(price * margin / 100);
            sum = sum.toFixed(2);
            $("#price").val(sum);
        });

        function Update() {
            var type = $("input[name='type']:checked").val();
            var coin = $('#coin').val();
            var location = $('#location').val();
            var currency = $("#currency").val();
            var margin = $("#margin").val();
            var min_price = $("#min_price").val();
            var min_limit = $("#min_limit").val();
            var max_limit = $("#max_limit").val();
            var due_time = $('#due_time').val();
            var pay_method = $('#pay_method').val();
            var message = $("#message").val();
            var safe_option = $("input[name='safe_option']:checked").val();
            var trust_only = ($("input[name='trust_only']:checked").val() == 1) ? 1 : 0;
            var open_time = $("select[name='mon_s']").val() + '-' + $("select[name='mon_e']").val() + ',' + $("select[name='tue_s']").val() + '-' + $("select[name='tue_e']").val() + ',' + $("select[name='wed_s']").val() + '-' + $("select[name='wed_e']").val() + ',' + $("select[name='thu_s']").val() + '-' + $("select[name='thu_e']").val() + ',' + $("select[name='fri_s']").val() + '-' + $("select[name='fri_e']").val() + ',' + $("select[name='sat_s']").val() + '-' + $("select[name='sat_e']").val() + ',' + $("select[name='sun_s']").val() + '-' + $("select[name='sun_e']").val();

            if (!margin) {
                layer.tips('请输入溢价！', '#margin', {tips: 3});
                $('#margin').focus();
                return false;
            }

            if (!min_limit) {
                layer.tips('请输入最小限额', '#min_limit', {tips: 3});
                $('#min_limit').focus();
                return false;
            }

            if (!max_limit) {
                layer.tips('请输入最大金额', '#max_limit', {tips: 3});
                $('#max_limit').focus();
                return false;
            }

            if (!message) {
                layer.tips('请输入交易条款', '#message', {tips: 3});
                $('#message').focus();
                return false;
            }

            if (type == 0) {
                if (!due_time) {
                    layer.tips('请输入付款期限', '#due_time', {tips: 3});
                    $('#due_time').focus();
                    return false;
                }
            }

            $.post("/Newad/upad.html", {
                type: type,
                coin: coin,
                location: location,
                currency: currency,
                margin: margin,
                min_price: min_price,
                min_limit: min_limit,
                max_limit: max_limit,
                due_time: due_time,
                pay_method: pay_method,
                message: message,
                safe_option: safe_option,
                trust_only: trust_only,
                open_time: open_time,
                token: newad
            }, function (data) {
                if (data.status == 1) {
                    layer.msg(data.info, {icon: 1});
                    newad = data.url;
                    if (type == 1) {
                        window.location.href = "/User/myad/type/1.html";
                    } else {
                        window.location.href = "/User/myad/type/0.html";
                    }
                } else {
                    layer.msg(data.info, {icon: 2});
                    newad = data.url;
                }
            }, "json");
        }

        $('#newad_box').addClass('on');
        $(document).ready(function () {
            var paypassset =;
            if (paypassset) {
                layer.alert("请先设置交易密码！");
                setTimeout(function () {
                    window.location.href = "/User/paypassword"
                }, 3000);
            }
        });
    </script>
    </div>
@endsection
