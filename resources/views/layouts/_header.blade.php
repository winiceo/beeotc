<div class="otheader" style="height:64px;">
    <div class="header" style="height:64px;">
        <div class="logo">
            <a href="/">

            </a>
        </div>
        <div class="hdmenu">
            <ul>
                <li id="index_box"><a href="/">首页</a></li>
                <li id="trade_box">
                    <a href="/trade"><span>场外交易</span></a>
                </li>
                <li id="newad_box">
                    <a href="/trade/push/ad"><span>发布广告</span></a>
                </li>
                <li id="finance_box"><a href="/financial">钱包</a></li>
                <li id="article_box"><a href="/fqa">帮助中心</a></li>
            </ul>
        </div>
        <div class="header_dz">
            <span class="select_index select_index_DD">
              <a href="/Order/orderlist.html?status=0" style="color:rgba(0,0,0,0.7);">订单<span id="neworder"></span></a>
            </span>
            <!--  语言选择 -->
            <!-- <span class="select_index">
              <img src="/Public/Home/news/images/zh_CN.png" alt="" style="width:16px;vertical-align: middle;margin-top: -3px;">
              <span>▼</span>
            </span> -->
            <span class="dl_index">
              <a href="/User/index.html"><img src="/Public/Home/news/images/xq.png" alt=""
                                              style="vertical-align: middle;margin-top: -3px;"></a>
            </span>
            <span class="dl_index dl_index_ts">
              <a href="/Login/loginout.html"><img src="/Public/Home/news/images/tc.png"
                                                  style="vertical-align: middle;margin-top: -3px;"></a>
            </span>
            <div class="ts">
                <span style="display:inline-block;position: absolute;top:-16px;right:16px;width:0;height: 0;border-width:8px;border-style: solid;border-color: #fff #fff rgba(0, 0, 0, 0.75) #fff;"></span>退出
            </div>
        </div>
        <script type="text/javascript">
            $(document).ready(function () {
                chatNum("neworder", 0, 0);
            });
        </script>
    </div>
</div>
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