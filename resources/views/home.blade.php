@extends('layouts.web', ['bodyClass' => 'home'])

@section('body')

<div id="container">

    <div class="banner">
        <div class="bd">
            <a href="/Trade/index.html"><img src="/Public/Home/news/images/jy_banner.jpg" alt="" style="width: 100%;"></a>
            <!-- <ul>
                              <li style="background: url(http://bfzx.oss-ap-southeast-1.aliyuncs.com/upload/banner002.jpg) top center no-repeat;"></li>             <li style="background: url(http://bfzx.oss-ap-southeast-1.aliyuncs.com/upload/banner001.jpg) top center no-repeat;"></li>                </ul> -->
        </div>
        <!-- <div class="hd">
            <ul>
                <li></li><li></li>                </ul>
        </div> -->
        <!--   <div class="banin">
              <div id="login-bar" class="login_box">
                  <h2>欢迎登录华域积分</h2>
                  <dl>
                      <dd>账号:
                          <a href="/finance/" class="user-email" style="color: #e75600;">1145557081@qq.com</a>
                      </dd>
                      <dd>
                          ID：
                          <span class="user-id orange">2</span>
                      </dd>
                      <dd>
                          总资产：
                          <span class="user-finance orange" id="user_finance"></span>
                      </dd>
                  </dl>
                  <div class="login_box_2_btn">
                      <a href="/finance/mycz.html">充值</a>
                      <a href="/finance/mytx.html">提现</a>
                      <a href="/finance/mywt.html" class="w82">委托管理</a>
                  </div>
                  <div class="gotocenter">
                      <a href="/finance/" class="center">去财务中心</a>
                  </div>
              </div>
                          </div> -->
        <!-- 官方公告不要了 -->
        <div class="trustbox" style="background:#F8FAFB;">
            <div style="width:1200px;margin:0 auto;">
                <div class="truinner">
                    <h1 style="color:#333;font-weight: normal;font-size: 24px;margin-bottom: 10px;">双向交易 买卖自由 安全可靠</h1>
                    <h5 style="color:#8b8b8b;font-size:14px;text-align: center;font-weight: normal;">我们的故事，从CoinWord开始。<a href="/Trade/index.html" style="color:#108ee9;text-decoration: underline;"> 查看更多广告 →</a></h5>
                    <div style="float: left;width:745px;">
                        <div class="trubot">
                            <div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">wangyujie123</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 0 | 好评度 0% | 信任 0</li>
                                    <li class="desc" style="width:90px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height:93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">46788.23CNY</div>
                                        <div>1000.00~20000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=1&id=6" style="display:inline-block;width:52px;height:32px;background: #92b33d;color:#fff;border-radius: 4px;line-height: 32px;">
                                            购买
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">ycaby</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 1 | 好评度 100% | 信任 0</li>
                                    <li class="desc" style="width:90px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height:93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">46329.52CNY</div>
                                        <div>2300.00~4555.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=1&id=5" style="display:inline-block;width:52px;height:32px;background: #92b33d;color:#fff;border-radius: 4px;line-height: 32px;">
                                            购买
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">xinjie</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 12 | 好评度 108% | 信任 0</li>
                                    <li class="desc" style="width:90px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height:93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">46788.23CNY</div>
                                        <div>100.00~10000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=1&id=4" style="display:inline-block;width:52px;height:32px;background: #92b33d;color:#fff;border-radius: 4px;line-height: 32px;">
                                            购买
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">ycaby</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 1 | 好评度 100% | 信任 0</li>
                                    <li class="desc" style="width:90px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height:93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">46788.23CNY</div>
                                        <div>1500.00~4798.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=1&id=3" style="display:inline-block;width:52px;height:32px;background: #92b33d;color:#fff;border-radius: 4px;line-height: 32px;">
                                            购买
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">xinjie</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 12 | 好评度 108% | 信任 0</li>
                                    <li class="desc" style="width:90px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height:93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">46788.23CNY</div>
                                        <div>1000.00~50000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=1&id=1" style="display:inline-block;width:52px;height:32px;background: #92b33d;color:#fff;border-radius: 4px;line-height: 32px;">
                                            购买
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div>                </div>
                        <div class="trubot">
                            <div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">suenli</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 10 | 好评度 120% | 信任 0</li>
                                    <li class="desc" style="width:90px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">50457.89CNY</div>
                                        <div>1000.00~100000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=0&id=4" style="display:inline-block;width:52px;height:32px;background:#eb6558;color:#fff;border-radius: 4px;line-height: 32px;">
                                            出售
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">suenli</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 10 | 好评度 120% | 信任 0</li>
                                    <li class="desc" style="width:90px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        ETH                                </li>
                                    <li class="desc" style="width:180px;height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">2263.92CNY</div>
                                        <div>100.00~20000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=0&id=3" style="display:inline-block;width:52px;height:32px;background:#eb6558;color:#fff;border-radius: 4px;line-height: 32px;">
                                            出售
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">xinjie</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 12 | 好评度 108% | 信任 0</li>
                                    <li class="desc" style="width:90px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">46788.23CNY</div>
                                        <div>100.00~100000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=0&id=2" style="display:inline-block;width:52px;height:32px;background:#eb6558;color:#fff;border-radius: 4px;line-height: 32px;">
                                            出售
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div><div>
                                <ul style="overflow: hidden;width:100%;">
                                    <li class="topimg1" style="width: 70px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <img width="62" height="62" src="/Public/Home/images/hportrait/head_portrait60.png" style="border-radius: 50%;overflow: hidden;vertical-align: middle;">                                </li>
                                    <li style="width:110px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">xinjie</li>
                                    <li style="width:220px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">交易 12 | 好评度 108% | 信任 0</li>
                                    <li class="desc" style="width:90px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        BTC                                </li>
                                    <li class="desc" style="width:180px;height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <div style="color: #92b33d;font-size: 16px;font-weight: bold;line-height: 50px;">44035.98CNY</div>
                                        <div>35000.00~70000.00CNY</div>
                                    </li>
                                    <li class="desc" style="width: 75px;height:93px;line-height: 93px;text-align: center;border-bottom: 1px solid #e9e9e9;">
                                        <a href="/Newad/advdetail.html?type=0&id=1" style="display:inline-block;width:52px;height:32px;background:#eb6558;color:#fff;border-radius: 4px;line-height: 32px;">
                                            出售
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="clear:both;"></div>                </div>
                    </div>
                    <!-- <div style="width: 368px;float:right;border:1px solid #e9e9e9;border-radius: 4px;font-size: 16px;text-align: center;margin-top: 30px;height: 300px;">
                        最新交易
                    </div> -->
                    <div style="width: 368px;min-height:400px;float:right;">
                        <div class="nwbright" style="width: 368px;float:right;border:1px solid #e9e9e9;border-radius: 4px;font-size: 16px;margin-top: 30px;">
                            <div style="height: 30px;border-bottom: 1px solid #e9e9e9;padding:10px;line-height: 30px;">
                                <h1 style="font-size: 16px;font-weight: bold;padding-left: 15px;border-left: 5px solid #108ee9;text-align: left;">交易排行榜</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div>
                                            <div style="line-height: 40px;padding:0 10px;">
                                                <span style="display: inline-block;width:20px;height: 20px;line-height: 20px;text-align: center;background: #108ee9;color:#fff;margin-right:10px;">1</span>xinjie</div>

                                        </div>
                                        <div style="border-bottom: 1px solid #e9e9e9;overflow: hidden;height:62px;padding:10px 0;">
                                            <div style="float: left;width:62px;height:62px;margin-left: 40px;">
                                                <img src="/Public/Home/images/hportrait/head_portrait60.png" style="width:62px;height: 62px;border-radius: 50%;overflow: hidden;" />
                                            </div>
                                            <div style="float: right;width:235px;margin-right: 10px;font-size: 13px;color:#666;">
                                                <div>累计交易次数：12</div>
                                                <div>好评度：108%</div>
                                                <div>共被 0 人信任</div>
                                                <!--<div>累计交易量：0</div>-->
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div style="line-height: 40px;padding:0 10px;">
                                                <span style="display: inline-block;width:20px;height: 20px;line-height: 20px;text-align: center;background: #108ee9;color:#fff;margin-right:10px;">2</span>suenli</div>

                                        </div>
                                        <div style="border-bottom: 1px solid #e9e9e9;overflow: hidden;height:62px;padding:10px 0;">
                                            <div style="float: left;width:62px;height:62px;margin-left: 40px;">
                                                <img src="/Public/Home/images/hportrait/head_portrait60.png" style="width:62px;height: 62px;border-radius: 50%;overflow: hidden;" />
                                            </div>
                                            <div style="float: right;width:235px;margin-right: 10px;font-size: 13px;color:#666;">
                                                <div>累计交易次数：10</div>
                                                <div>好评度：120%</div>
                                                <div>共被 0 人信任</div>
                                                <!--<div>累计交易量：0</div>-->
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div style="line-height: 40px;padding:0 10px;">
                                                <span style="display: inline-block;width:20px;height: 20px;line-height: 20px;text-align: center;background: #108ee9;color:#fff;margin-right:10px;">3</span>adadczsa</div>

                                        </div>
                                        <div style="border-bottom: 1px solid #e9e9e9;overflow: hidden;height:62px;padding:10px 0;">
                                            <div style="float: left;width:62px;height:62px;margin-left: 40px;">
                                                <img src="/Public/Home/images/hportrait/20171024/s_59eefae5d3680.jpg" style="width:62px;height: 62px;border-radius: 50%;overflow: hidden;" />
                                            </div>
                                            <div style="float: right;width:235px;margin-right: 10px;font-size: 13px;color:#666;">
                                                <div>累计交易次数：2</div>
                                                <div>好评度：1%</div>
                                                <div>共被 6 人信任</div>
                                                <!--<div>累计交易量：0</div>-->
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div style="line-height: 40px;padding:0 10px;">
                                                <span style="display: inline-block;width:20px;height: 20px;line-height: 20px;text-align: center;background: #108ee9;color:#fff;margin-right:10px;">4</span>xiaojian</div>

                                        </div>
                                        <div style="border-bottom: 1px solid #e9e9e9;overflow: hidden;height:62px;padding:10px 0;">
                                            <div style="float: left;width:62px;height:62px;margin-left: 40px;">
                                                <img src="/Public/Home/images/hportrait/head_portrait60.png" style="width:62px;height: 62px;border-radius: 50%;overflow: hidden;" />
                                            </div>
                                            <div style="float: right;width:235px;margin-right: 10px;font-size: 13px;color:#666;">
                                                <div>累计交易次数：1</div>
                                                <div>好评度：300%</div>
                                                <div>共被 0 人信任</div>
                                                <!--<div>累计交易量：0</div>-->
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div style="line-height: 40px;padding:0 10px;">
                                                <span style="display: inline-block;width:20px;height: 20px;line-height: 20px;text-align: center;background: #108ee9;color:#fff;margin-right:10px;">5</span>eryue</div>

                                        </div>
                                        <div style="border-bottom: 1px solid #e9e9e9;overflow: hidden;height:62px;padding:10px 0;">
                                            <div style="float: left;width:62px;height:62px;margin-left: 40px;">
                                                <img src="/Public/Home/images/hportrait/head_portrait60.png" style="width:62px;height: 62px;border-radius: 50%;overflow: hidden;" />
                                            </div>
                                            <div style="float: right;width:235px;margin-right: 10px;font-size: 13px;color:#666;">
                                                <div>累计交易次数：1</div>
                                                <div>好评度：100%</div>
                                                <div>共被 0 人信任</div>
                                                <!--<div>累计交易量：0</div>-->
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="nwbbox">
                            <div class="nwbleft" style="width:368px;border:1px solid #e9e9e9;border-radius: 4px;border-bottom: none;">
                                <div class="top">
                                    <h1>官方公告</h1>
                                    <span class="more"><a href="/Article/index/id/30">更多</a></span>
                                </div>
                                <div class="nwbot">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="coinbox">
            <div class="cbhd">
                <ul>
                    <li>
                        <img src="/Public/Home/news/images/bicon1.png" class="img1">
                        <img src="/Public/Home/news/images/bicon12.png" class="img2">
                        主交易区
                    </li>
                    <li style="display: none;">
                        <img src="/Public/Home/news/images/bicon2.png" class="img1">
                        <img src="/Public/Home/news/images/bicon22.png" class="img2">
                        资产包
                    </li>
                </ul>
            </div>
            <div class="cbbd">
                <ul>
                    <li>
                        <div class="tbox borbot">
                            <table class="titletable">
                                <tr>
                                    <td class="wd180" style="text-align: left;">币种名称</td>
                                    <td class="wd140">
                                        最新成交价
                                    </td>
                                    <td class="wd120">
                                        买一价
                                    </td>
                                    <td class="wd120">
                                        卖一价
                                    </td>
                                    <td class="wd120">
                                        成交量
                                    </td>
                                    <td class="wd120">
                                        成交额
                                    </td>
                                    <td class="wd120">
                                        日涨跌
                                    </td>
                                    <td class="wd180">价格趋势（3日）</td>
                                    <td class="wd100">操作</td>
                                </tr>
                            </table>
                        </div>
                                            </li>
                    <li>
                        <div class="tbox borbot">
                            <table class="titletable">
                                <tr>
                                    <td class="wd180" style="text-align: left;">币种名称</td>
                                    <td class="wd140">
                                        最新成交价
                                    </td>
                                    <td class="wd120">
                                        买一价
                                    </td>
                                    <td class="wd120">
                                        卖一价
                                    </td>
                                    <td class="wd120">
                                        成交量
                                    </td>
                                    <td class="wd120">
                                        成交额
                                    </td>
                                    <td class="wd120">
                                        日涨跌
                                    </td>
                                    <td class="wd180">价格趋势（3日）</td>
                                    <td class="wd100">操作</td>
                                </tr>
                            </table>
                        </div>

                        
                    </li>
                </ul>
            </div>
        </div> -->
        <!-- <script type="text/javascript">
            jQuery(".coinbox").slide({mainCell:".cbbd ul",titCell:".cbhd ul li",effect:"fold"});
        </script> -->
        <!-- <div class="nwbbox">
          <div class="nwbleft" style="width:370px;margin-right: 45px;">
                    <div class="top">
                        <h1>官方公告</h1>
                        <span class="more"><a href="/Article/index/id/30">更多</a></span>
                    </div>
                    <div class="nwbot">
                                        </div>
                </div>
          <div class="nwbright">
            <h1>明星交易员</h1>
            <div>
              <ul>
                            <li>
                    <div>
                      <div>1</div>
                      <div>374598390@qq.com</div>
                      <div><img src="/Public/Home/images/coin.png" /></div>
                    </div>
                    <div>
                      <div>
                        <img src="" />                  </div>
                      <div>
                        <div>累计交易次数：12</div>
                        <div>信任人数被0人信任</div>
                        <div>累计交易量：0</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>2</div>
                      <div>2312120761@qq.com</div>
                      <div><img src="/Public/Home/images/coin.png" /></div>
                    </div>
                    <div>
                      <div>
                        <img src="" />                  </div>
                      <div>
                        <div>累计交易次数：10</div>
                        <div>信任人数被0人信任</div>
                        <div>累计交易量：0</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>3</div>
                      <div>admin</div>
                      <div><img src="/Public/Home/images/coin.png" /></div>
                    </div>
                    <div>
                      <div>
                        <img src="" />                  </div>
                      <div>
                        <div>累计交易次数：2</div>
                        <div>信任人数被6人信任</div>
                        <div>累计交易量：0</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>4</div>
                      <div>1020472258@qq.com</div>
                      <div><img src="/Public/Home/images/coin.png" /></div>
                    </div>
                    <div>
                      <div>
                        <img src="" />                  </div>
                      <div>
                        <div>累计交易次数：1</div>
                        <div>信任人数被0人信任</div>
                        <div>累计交易量：0</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>5</div>
                      <div>2622010581@qq.com</div>
                      <div><img src="/Public/Home/images/coin.png" /></div>
                    </div>
                    <div>
                      <div>
                        <img src="" />                  </div>
                      <div>
                        <div>累计交易次数：1</div>
                        <div>信任人数被0人信任</div>
                        <div>累计交易量：0</div>
                      </div>
                    </div>
                  </li>
                            </ul>
            </div>
          </div>
        </div> -->
        <div class="trustbox" style="width: 1200px;margin:30px auto;">
            <div class="truinner" style="width:100%;background:url(/Public/Home/news/images/save.png) no-repeat;background-size:100%;">
                <h1>安全可靠的场外交易平台</h1>
                <ul class="trubot" style="width:100%;">
                    <li >
                        <div class="topming">
                            <img src="/Public/Home/news/images/image1.png">
                        </div>
                        <div class="topming1">
                            <h2>资金安全</h2>
                            <p class="desc">
                                银行级别的SSL安全连接以确保交易安全
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="topming">
                            <img src="/Public/Home/news/images/image4.png">
                        </div>
                        <div class="topming1">
                            <h2>信息同步</h2>
                            <p class="desc">
                                实时获取全球同步信息快速确认交易
                            </p>
                        </div>
                    </li>
                    <li style="float: right;margin-right: 0;">
                        <div class="topming">
                            <img src="/Public/Home/news/images/image6.png">
                        </div>
                        <div class="topming1">
                            <h2>系统专业</h2>
                            <p class="desc">
                                拥有多年技术经验的专业团队维护系统稳定性，多级风险识别控制，保障系统不间断运行
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="topming">
                            <img src="/Public/Home/news/images/image2.png">
                        </div>
                        <div class="topming1">
                            <h2>快捷方便</h2>
                            <p class="desc">
                                充值即时、转币迅速，区块链资产充值2分钟内到账
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="topming">
                            <img src="/Public/Home/news/images/image5.png">
                        </div>
                        <div class="topming1">
                            <h2>合规合法</h2>
                            <p class="desc">
                                千万注册资本正规公司运作，核心合伙人为资深法律界人士，风控、合规、反洗钱体系完善
                            </p>
                        </div>
                    </li>
                    <li style="float: right;margin-right: 0;">
                        <div class="topming">
                            <img src="/Public/Home/news/images/image3.png">
                        </div>
                        <div class="topming1">
                            <h2>7×24小时客户服务</h2>
                            <p class="desc">
                                邮件、热线、微信多沟通渠道，保证任何客服需求十分钟内得到解答处理
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--<div class="nwbbox">
          <div class="nwbleft" style="width:370px;margin-right: 45px;">
               <div class="top">
                   <h1>行业资讯</h1>
                   <span class="more"><a href="/Article/index/id/">更多</a></span>
               </div>
               <div class="nwbot">
                                   </div>
           </div>
           <div class="nwbleft" style="width:370px">
               <div class="top">
                   <h1>新闻资讯</h1>
                   <span class="more"><a href="/Article/index/id/">更多</a></span>
               </div>
               <div class="nwbot">
                                   </div>
           </div>
       </div>
       <div class="copbox">
          <div class="incop">
               <h1>战略合作伙伴</h1>
               <ul class="coplist" style="overflow: hidden;height:auto;">
                                                       </ul>
           </div>
       </div> -->
        <script type="text/javascript">

            // 处理首页交易币种行情---------------------S
            $(document).ready(function(){
                trends();
            });

            function trends() {
                $.getJSON('/Ajax/trends?t=' + rd(), function (d) {
                    trends = d;
                    allcoin();
                });
            }

            function allcoin_callback(priceTmp) {
                for (var i in priceTmp) {
                    var c = priceTmp[i][8];
                    if (typeof (trends[c]) != 'undefined' && typeof (trends[c]['data']) != 'undefined' && trends[c]['data'].length > 0) {
                        $.plot($("#" + c + "_plot"), [
                            {
                                shadowSize: 0,
                                data: trends[c]['data']
                            }
                        ], {
                            grid: {borderWidth: 0},
                            xaxis: {
                                mode: "time",
                                ticks: false
                            },
                            yaxis: {
                                tickDecimals: 0,
                                ticks: false
                            },
                            colors: ['#f99f83']
                        });
                    }
                }
            }

            function allcoin(cb) {
                $.get('/Ajax/allcoin?t=' + rd(), cb ? cb : function (d) {
                    ALLCOIN = d;
                    var t = 0;
                    var img = '';
                    priceTmp = [];
                    //把json转换为二维数组 进行渲染
                    for (var x in d) {
                        if (typeof(trends[x]) != 'undefined' && parseFloat(trends[x]['yprice']) > 0) {
                            rise1 = (((parseFloat(d[x][4]) + parseFloat(d[x][5])) / 2 - parseFloat(trends[x]['yprice'])) * 100) / parseFloat(trends[x]['yprice']);
                            rise1 = rise1.toFixed(2);
                        } else {
                            rise1 = 0;
                        }
                        img = d[x].pop();
                        d[x].push(rise1);
                        d[x].push(x);
                        d[x].push(img);
                        priceTmp.push(d[x]);
                    }
                    allcoin_callback(priceTmp);
                }, 'json');
            }

            function rd() {
                return Math.random();
            }

            // 处理首页交易币种行情---------------------E

            var cookieValue = $.cookies.get('cookie_username');
            if (cookieValue != '' && cookieValue != null) {
                $("#index_username").val(cookieValue);
            }
            function upLoginIndex() {
                var username = $("#index_username").val();
                var password = $("#index_password").val();
                var verify = $("#index_verify").val();
                var index_ga=$("#index_ga").val();
                if (username == "" || username == null) {
                    layer.tips('请输入用户名', '#index_username', {tips: 3});
                    return false;
                }
                if (password == "" || password == null) {
                    layer.tips('请输入登录密码', '#index_password', {tips: 3});
                    return false;
                }

                if (verify == "" || verify == null || verify == "请输入验证码") {
                    layer.tips('请输入验证码', '#index_verify', {tips: 3});
                    return false;
                }

                $.post("/Login/submit.html", {
                    username: username,
                    password: password,
                    verify : verify,
                    ga : index_ga
                }, function (data) {
                    if (data.status == 1) {
                        $.cookies.set('cookie_username', username);
                        layer.msg(data.info, {icon: 1});
                        window.location = '/User';
                    } else {
                        //刷新验证码
                        //$(".reloadverifyindex").click();
                        var yzm = $(".yzm").attr("src");
                        if (yzm.indexOf('?') > 0) {
                            $(".yzm").attr("src",
                                yzm + '&random=' + Math.random());
                        } else {
                            $(".yzm").attr(
                                "src",
                                yzm.replace(/\?.*$/, '') + '?'
                                + Math.random());
                        }
                        layer.msg(data.info, {icon: 2});
                        if (data.url) {
                            window.location = data.url;
                        }
                    }
                }, "json");
            }
            $('#index_box').addClass('on');

            function chkpwd(){
                var password = $("#index_password").val();
                var patten =/^[a-zA-Z0-9]+$/;
                var match = new RegExp(patten);
                if (!match.test(password)) {
                    layer.tips('密码格式为6~16位，不含特殊符号！','#index_password',{tips:3});
                    var result = password.substring(0,password.length-1);
                    $("#index_password").val(result);
                }
            }
            $(".cbhd ul li").mouseover(function(){
                $.getJSON('/Ajax/trends?t=' + rd(), function (d) {
                    trends = d;
                    allcoin();
                });
            });
        </script>


@endsection