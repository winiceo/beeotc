@extends('layouts.app')

@section('content')
    <div class="container">
        <div class=" ">
            <div class="usncont">
                <div class="usnc_right">
                    <h1>创建一个广告</h1>
                    <div class="leftmoney">
                        如果您经常交易虚拟币，可以发布自己的虚拟币交易广告。
                        <br>如果您只想购买或出售一次，我们建议您直接从购买或出售列表中下单交易。
                        <br>
                        发布一则交易广告是免费的。
                        <br>
                        发布交易广告的 CoinWord 用户每笔完成的交易需要缴纳 0.5% 的费用。<br>
                        您必须在交易广告或交易聊天中提供您的付款详细信息，发起交易后，价格会锁定，除非定价中有明显的错误。<br>
                        所有交流必须在 CoinWord 上进行，请注意高风险有欺诈风险的付款方式。<br>
                        <a href="/User/nameauth.html" style="color:#108ee9;">身份验证</a>成功后您的广告才会显示在交易列表中。
                    </div>
                    <div class="rech_box">
                        <div class="rech_bd nmt">


                            <div class="rechmid">
                                <h4 class="h4_new">交易类型</h4>
                                <p class="line"></p>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>交易币种:  <span style="color:rgba(0,0,0,0.7);font-size: 14px;">请选择你要发布广告的币种。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <select id="coin" class="rechipt" style="width:572px;height:50px;color:rgba(0,0,0,.7);">
                                            <option value="3">BTC 比特币</option>													<option value="4">ETH 以太坊</option>										</select>
                                    </div>
                                </div>
                                <div>
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>选择广告类型: </p>
                                    <div>
                                        <label class="input_new"><input id="sell" name="type" type="radio" value="1" checked="">在线出售 </label>
                                        <label class="input_new"><input id="buy" name="type" type="radio" value="0">在线购买 </label>
                                    </div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>所在地:  <span style="color:rgba(0,0,0,0.7);font-size: 14px;">请选择你要发布广告的国家。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <select id="location" class="rechipt" style="width:572px;height:50px;color:rgba(0,0,0,.7);">
                                            <option value="1">CN 中国</option><option value="2">US 美国</option><option value="3">AU 澳大利亚</option><option value="4">JP 日本</option><option value="5">KR 韩国</option><option value="6">CA 加拿大</option><option value="7">FR 法国</option><option value="8">IN 印度</option><option value="9">RU 俄罗斯</option><option value="10">DE 德国</option><option value="11">GB 英国</option><option value="12">HK 香港</option><option value="13">BR 巴西</option><option value="14">ID 印尼</option><option value="15">PH 菲律宾</option>										</select>
                                    </div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>货币:  <span style="color:rgba(0,0,0,0.7);font-size: 14px;"> 您希望交易付款的货币类型。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <select id="currency" class="rechipt" style="width:572px;height:50px;color:rgba(0,0,0,.7);">
                                            <option value="1">CNY 人民币</option><option value="2">USD 美元</option><option value="3">AUD 澳元</option><option value="4">JPY 日元</option><option value="5">KRW 韩币</option><option value="6">CAD 加元</option><option value="7">CHF 法郎</option><option value="8">INR 卢比</option><option value="9">RUB 卢布</option><option value="10">EUR 欧元</option><option value="11">GBP 英镑</option><option value="12">HKD 港币</option><option value="13">BRL 巴西雷亚尔</option><option value="14">IDR 印尼盾</option><option value="15">MXN 比索</option>										</select>
                                    </div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>溢价:<span style="color:rgba(0,0,0,0.7);font-size: 14px;"> 如果您想要比特币市场价格的溢价，您可以以高于市场价买入或低于市场价卖出的方式来并吸引更多的交易者。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <input id="margin" type="text" value="" class="rechipt" style="width: 562px;height: 48px;">
                                    </div>
                                    <div class="bfs">%</div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>价格:<span style="color:rgba(0,0,0,0.7);font-size: 14px;"> 基于溢价比例得出的报价，10分钟更新一次。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <input type="text" value="" class="rechipt" id="price" readonly="readonly" style="width: 562px;height: 48px;">
                                    </div>
                                    <div class="cur">CNY</div>
                                </div>
                                <div id="zuidi" class="rechipt_box">
                                    <p class="p_new">最低价（选填）:
                                        <span style="color:rgba(0,0,0,0.7);font-size: 14px;"> 最低价格是为了您在动荡的市场中保持稳定收益，市场价格低于最低价格时，您的广告仍以最低价格展示出来。
</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <input type="text" value="" class="rechipt" id="min_price" style="width: 562px;height: 48px;">
                                    </div>
                                    <div class="cur" style="position: absolute;top:78px;">CNY</div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>最小限额: <span style="color:rgba(0,0,0,0.7);font-size: 14px;">一次交易的最低的交易限制。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <input type="text" value="" class="rechipt" id="min_limit" style="width: 562px;height: 48px;">
                                    </div>
                                    <div class="cur">CNY</div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>最大限额: <span style="color:rgba(0,0,0,0.7);font-size: 14px;">一次交易中的最大交易限制，您的钱包余额也会影响最大量的设置。</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <input type="text" value="" class="rechipt" id="max_limit" style="width: 562px;height: 48px;">
                                    </div>
                                    <div class="cur">CNY</div>
                                </div>
                                <div id="qixian" class="rechipt_box" style="display: none">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>付款期限: <span style="color:rgba(0,0,0,0.7);font-size: 14px;">您承诺在此期限内付款（分钟）</span></p>
                                    <div class="iptbox" style="width:600px;">
                                        <input type="text" value="" class="rechipt" id="due_time" style="width: 562px;height: 48px;">
                                    </div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>收款方式:</p>
                                    <div class="iptbox" style="width:600px;">
                                        <select id="pay_method" class="rechipt" style="width:572px;    height: 50px;color:rgba(0,0,0,.7)">
                                            <option value="1">现金存款</option><option value="2">银行转账</option><option value="3">支付宝</option><option value="4">微信支付</option><option value="5">iTunes礼品卡</option><option value="6">Paytm</option><option value="7">其它</option>                                      	</select>
                                    </div>
                                </div>
                                <div class="rechipt_box">
                                    <p class="p_new"><span style="color:#fd634f;margin-right: 4px;">*</span>交易条款:</p>
                                    <div class="iptbox" style="width: 532px;padding: 15px 20px;height: 110px;resize: none;line-height: 1.25;border:1px solid #d6dbdd;font-size: 14px;">
                                        <textarea id="message" style="resize: none;border:none;outline: none;color:rgba(0,0,0,0.7);" rows="5" cols="66" placeholder="有关您的交易的其他信息，比如您交易的相关条款和支付方式。" onfocus="this.placeholder=''" onblur="this.placeholder='有关您的交易的其他信息，比如您交易的相关条款和支付方式。'"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="h4_new">高级设置</h4>
                                    <p class="line"></p>
                                    <div>
                                        <p class="p_new">是否启用安全选项：<span style="color:rgba(0,0,0,0.7);font-size: 14px;">启用后，仅限于已验证身份证的用户与本广告交易。</span></p>
                                        <div>
                                            <label class="input_new"><input name="safe_option" type="radio" value="1">启用 </label>
                                            <label class="input_new"><input name="safe_option" type="radio" value="0" checked="">不启用 </label>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="p_new">仅限受信任的交易者：<span style="color:rgba(0,0,0,0.7);font-size: 14px;">启用后，仅限于自己信任的用户与本广告交易。</span></p>
                                        <div>
                                            <input name="trust_only" type="checkbox" value="1" style="vertical-align: middle;">
                                            <span style="font-size: 15px;color: rgba(0,0,0,.7);margin-right: 24px;vertical-align: middle;">启用</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="p_new">开放时间：<span style="color:rgba(0,0,0,0.7);font-size: 14px;">您希望广告自动显示和隐藏的天数和小时数。</span></p>
                                        <div>
                                            <span class="p_new" style="margin-right: 77px;">星期一:</span>
                                            <select name="mon_s" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="mon_e" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <div style="height: 10px;width:100%;"></div>
                                            <span class="p_new" style="margin-right: 77px;">星期二:</span>
                                            <select name="tue_s" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="tue_e" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <div style="height: 10px;width:100%;"></div>
                                            <span class="p_new" style="margin-right: 77px;">星期三:</span>
                                            <select name="wed_s" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="wed_e" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <div style="height: 10px;width:100%;"></div>
                                            <span class="p_new" style="margin-right: 77px;">星期四:</span>
                                            <select name="thu_s" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="thu_e" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <div style="height: 10px;width:100%;"></div>
                                            <span class="p_new" style="margin-right: 77px;">星期五:</span>
                                            <select name="fri_s" style="width:216px!important;height:50px;padding-left: 10px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="fri_e" style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;padding-left: 10px;font-size: 16px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <div style="height: 10px;width:100%;"></div>
                                            <span class="p_new" style="margin-right: 77px;">星期六:</span>
                                            <select name="sat_s" style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;padding-left: 10px;color:rgba(0,0,0,.7);">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="sat_e" style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);padding-left: 10px;">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <div style="height: 10px;width:100%;"></div>
                                            <span class="p_new" style="margin-right: 77px;">星期日:</span>
                                            <select name="sun_s" style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);padding-left: 10px;">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                            <select name="sun_e" style="width:216px!important;height:50px;margin-right: 30px;border:1px solid #d6dbdd;font-size: 16px;color:rgba(0,0,0,.7);padding-left: 10px;">
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
                                                <option value="8">8:00</option>																<option value="9">9:00</option>
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
                                                <option value="21">21:00</option>															<option value="22">22:00</option>
                                                <option value="23">23:00</option>
                                                <option value="24">24:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="rechipt_box">
                                    <div class="iptbox mrl110" style="width: 600px;">
                                        <input type="button" value="立即发布" class="rechbut" onclick="Update()" style="background: #108eed;width:190px;border-radius: 4px;height:48px;margin-left: 297px;margin-top: 30px;">
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>    </div>
@endsection

@section('scripts')
<script type="text/javascript">
    $('.select').select2();


</script>
@endsection

@section('styles')
<style>
    .dicussion {
        margin-top: 40px;
    }
</style>
@endsection
