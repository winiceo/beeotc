@extends('layouts.web', ['bodyClass' => 'home'])

@section('body')
    <div id="container">

        <style>
            .change_tab{height: 40px;line-height: 40px;text-align: center;}
            .change_tab a{display: inline-block;width:130px;color:#666;font-weight: bold;font-size: 14px;}
            .change_tab a:hover{color:#108ee9;border-bottom: 3px solid #108ee9;}
            .change_tab .on_new{color:#108ee9;border-bottom: 3px solid #108ee9;}
            .select_div{width:1198px;margin:0 auto;border:1px solid #e4e4e4;height: 85px;text-align:center;background: #fff;border-radius: 4px;margin-top:3px;}
            .select_div form{width:1050px;margin:0 auto;height:35px;overflow:hidden;margin-top:25px;}
            .select_div select{width: 165px;height: 35px;float:left;border:1px solid #d6dbdd;border-radius: 4px;color:#252525;text-indent: 5px;margin-right: 5px;font-size: 13px;}
            .search_input{width:680px;height:35px;float:left;}
            .search_trade{float:left;background: #108ee9;color:#fff;width: 160px;height: 35px;outline: none;border:1px solid #108ee9;border-radius: 4px;margin-left: 40px;font-size: 13px;}
            .table_trade{width: 1200px;margin-top:30px;background: #fff;padding-bottom: 20px;border-radius: 4px 4px 0 0;min-height: 750px;}
            .table_trade table tr th{background: #f7f7f7;font-size: 14px;color:rgba(0, 0, 0, 0.9);text-align: left;font-weight: 500;height:53px;}
            .table_trade table tr td{padding:16px 0;border-bottom: 1px solid #d6dbdd;font-size: 14px;color: rgba(0, 0, 0, 0.7);}
            .table_trade table tr:hover{background: #ecf6fd;}
            .bsedit{color:#108ee9;display: inline-block;width:72px;height:30px;border:1px solid #108ee9;line-height:30px;text-align: center;border-radius: 4px;}
        </style>
        <div class="usernewout">
            <div class="usncont">
                <div>
                    <div class="change_tab">
                        <a href="/Trade/index/type/0.html" class="on_new">出售广告</a>
                        <a href="/Trade/index/type/1.html" >购买广告</a>
                    </div>
                    <div class="select_div">
                        <form action="/Trade/index.html" method="get">
                            <input type="hidden" name="type" value="0">
                            <select id="changeobj" name="obj">
                                <option value="1" >搜广告</option>
                                <option value="2" >搜用户</option>
                            </select>
                            <div class="search_input" id="adbox">
                                <select name="coin">
                                    <option value="" selected>币种</option>
                                    <option value="3" >BTC 比特币</option><option value="4" >ETH 以太坊</option>                        </select>
                                <select name="loca">
                                    <option value="" selected>地区</option>
                                    <option value="1" >CN 中国</option><option value="2" >US 美国</option><option value="3" >AU 澳大利亚</option><option value="4" >JP 日本</option><option value="5" >KR 韩国</option><option value="6" >CA 加拿大</option><option value="7" >FR 法国</option><option value="8" >IN 印度</option><option value="9" >RU 俄罗斯</option><option value="10" >DE 德国</option><option value="11" >GB 英国</option><option value="12" >HK 香港</option><option value="13" >BR 巴西</option><option value="14" >ID 印尼</option><option value="15" >PH 菲律宾</option>                        </select>
                                <select name="curr">
                                    <option value="" selected>货币</option>
                                    <option value="1" >CNY 人民币</option><option value="2" >USD 美元</option><option value="3" >AUD 澳元</option><option value="4" >JPY 日元</option><option value="5" >KRW 韩币</option><option value="6" >CAD 加元</option><option value="7" >CHF 法郎</option><option value="8" >INR 卢比</option><option value="9" >RUB 卢布</option><option value="10" >EUR 欧元</option><option value="11" >GBP 英镑</option><option value="12" >HKD 港币</option><option value="13" >BRL 巴西雷亚尔</option><option value="14" >IDR 印尼盾</option><option value="15" >MXN 比索</option>                        </select>
                                <select name="paym">
                                    <option value="" selected>支付方式</option>
                                    <option value="1" >现金存款</option><option value="2" >银行转账</option><option value="3" >支付宝</option><option value="4" >微信支付</option><option value="5" >iTunes礼品卡</option><option value="6" >Paytm</option><option value="7" >其它</option>                        </select>
                            </div>
                            <div class="search_input" id="userbox">
                                <input type="text" name="uname" value="" style="width:672px;height:33px;border: 1px solid #dbdbdb;border-radius: 4px;color: #252525;text-indent: 5px;margin-left: -5px;">
                            </div>
                            <input type="submit" value="搜索" class="search_trade">
                        </form>
                    </div>
                    <div class="table_trade">
                        <table>
                            <tr>
                                <th width="180px" style="padding-left:40px;">用户名</th>
                                <th width="100px">币种</th>
                                <th width="100px">地区</th>
                                <th width="250px">信用</th>
                                <th width="150px">支付方式</th>
                                <th width="200px">交易限额</th>
                                <th width="200px">价格</th>
                                <th width="115px">操作</th>
                            </tr>
                            <tr>
                                <td style="padding-left:40px;"><img style="height:35px;vertical-align: middle;margin-right:10px;width:35px;border-radius: 50%;" src="/Public/Home/images/hportrait/head_portrait60.png">suenli</td>
                                <td>BTC</td>
                                <td>CN</td>
                                <td>
                                    交易 10 |  好评度 120% | 信任 0                            </td>
                                <td>现金存款</td>
                                <td>1000-100000 CNY</td>
                                <td>49900.63 CNY</td>
                                <td><a href="/Newad/advdetail/type/0/id/4.html" class="bsedit">出售</a></td>
                            </tr><tr>
                                <td style="padding-left:40px;"><img style="height:35px;vertical-align: middle;margin-right:10px;width:35px;border-radius: 50%;" src="/Public/Home/images/hportrait/head_portrait60.png">suenli</td>
                                <td>ETH</td>
                                <td>CN</td>
                                <td>
                                    交易 10 |  好评度 120% | 信任 0                            </td>
                                <td>现金存款</td>
                                <td>100-20000 CNY</td>
                                <td>2263.72 CNY</td>
                                <td><a href="/Newad/advdetail/type/0/id/3.html" class="bsedit">出售</a></td>
                            </tr><tr>
                                <td style="padding-left:40px;"><img style="height:35px;vertical-align: middle;margin-right:10px;width:35px;border-radius: 50%;" src="/Public/Home/images/hportrait/head_portrait60.png">xinjie</td>
                                <td>BTC</td>
                                <td>CN</td>
                                <td>
                                    交易 12 |  好评度 108% | 信任 0                            </td>
                                <td>现金存款</td>
                                <td>100-100000 CNY</td>
                                <td>46271.49 CNY</td>
                                <td><a href="/Newad/advdetail/type/0/id/2.html" class="bsedit">出售</a></td>
                            </tr><tr>
                                <td style="padding-left:40px;"><img style="height:35px;vertical-align: middle;margin-right:10px;width:35px;border-radius: 50%;" src="/Public/Home/images/hportrait/head_portrait60.png">xinjie</td>
                                <td>BTC</td>
                                <td>CN</td>
                                <td>
                                    交易 12 |  好评度 108% | 信任 0                            </td>
                                <td>现金存款</td>
                                <td>35000-70000 CNY</td>
                                <td>43549.64 CNY</td>
                                <td><a href="/Newad/advdetail/type/0/id/1.html" class="bsedit">出售</a></td>
                            </tr>                </table>
                        <div class="pages"> 4 条记录 1/1 页          </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function(){
                var obj = $("#changeobj").val();
                if(obj == 1){
                    $("#userbox").hide();
                }else if(obj == 2){
                    $('#adbox').hide();
                }
            });
            $('#changeobj').change(function(){
                var obj_id = $(this).val();
                if(obj_id == "1"){
                    $('#userbox').hide();
                    $('#adbox').show();
                }else if(obj_id == "2"){
                    $('#adbox').hide();
                    $('#userbox').show();
                }
            });
            $('#trade_box').addClass('on');
        </script>

        <!--End of Zendesk Chat Script-->
    </div>

@endsection