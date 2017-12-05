<?php $__env->startSection('styles'); ?>
    <style type="text/css">
        .deal_list {
            position: absolute;
            left: -128px;
            background: #fff;
            z-index: 999999;
            border-bottom: 2px solid #f6554b;
            padding-bottom: 10px;
        }

        #menu_list_json img {
            vertical-align: middle;
        }

        .deal_list dl {
            width: 360px;
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
            margin: 10px 10px 0 10px;
        }

        .deal_list dd:hover {
            background: #f6554b;
        }

        .deal_list dd:hover a {
            color: #fff;
        }

        .nocontent {
            height: 34px;
            width: 80px;
            position: absolute;
            left: 0;
            top: -34px;
        }

        .deal_list dd a {
            float: left;
            font-size: 12px;
        }

        .hdmenu ul li {
            font-size: 16px;
        }

        .hdmenu ul li a {
            display: block;
            height: 100%;
            position: relative;
        }

        .logo {
            float: left;
            width: 200px;
            height: 64px;
            line-height: 64px;
        }

        .logo img {
            vertical-align: middle;
        }

        .deal_list_pic_cny img {
            width: 15px;
            height: 15px;
        }

        .hdmenu {
            float: left;
            width: 680px;
            height: 62px;
            text-align: left;
        }

        .header_dz {
            float: right;
            height: 64px;
            position: relative;
        }

        .select_index {
            display: inline-block;
            text-align: center;
            padding: 0px 10px;
            border: 1px solid #ccc;
            height: 26px;
            border-radius: 4px;
            margin-right: 10px;
            margin-top: 19px;
            line-height: 26px;
            position: relative;
        }

        .select_index:hover {
            border: 1px solid #108ee9;
            cursor: pointer;
        }

        .dl_index {
            display: inline-block;
            text-align: center;
            padding: 0 7px;
            border: 1px solid #ccc;
            height: 26px;
            border-radius: 4px;
            margin-right: 10px;
            margin-top: 19px;
            line-height: 26px;
            font-size: 14px;
        }

        .dl_index a {
            color: rgba(0, 0, 0, 0.65);
        }

        .dl_index:hover {
            border: 1px solid #108ee9;
        }

        .dl_index:hover a {
            color: #108ee9;
        }

        .zc_index {
            display: inline-block;
            text-align: center;
            padding: 0 7px;
            border: 1px solid #108ee9;
            height: 26px;
            border-radius: 4px;
            margin-right: 10px;
            margin-top: 19px;
            line-height: 26px;
            font-size: 14px;
            width: 32px;
            background: #108ee9;
        }

        .zc_index a {
            color: #fff;
        }

        .zc_index:hover {
            background: #49a9ee;
            border: 1px solid #49a9ee;
        }

        .header_dz .dl_index.current_new {
            border: 1px solid #108ee9;
        }

        .header_dz .dl_index.current_new a {
            color: #108ee9;
        }

        .header_dz .zc_index.current_new2 {
            background: #49a9ee;
            border: 1px solid #49a9ee;
        }

        .ts {
            width: 50px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            color: #fff;
            background: rgba(0, 0, 0, 0.75);
            border-radius: 4px;
            display: none;
            position: absolute;
            top: 63px;
            right: 4px;
        }

        .dl_index_ts:hover .ts {
            display: block;
        }

        #neworder {
            background-color: rgb(255, 0, 0);
            font-size: 12px;
            display: inline-block;
            width: 16px;
            height: 16px;
            text-align: center;
            line-height: 16px;
            vertical-align: middle;
            border-radius: 50%;
            margin-top: -3px;
            margin-left: 5px;
            display: none;
            color: #fff;
        }

        .select_index_DD {
            width: auto;
            padding: 0 10px;
        }

        .usernewout .usncont .usnc_right {
            width: 1078px;
        }
    </style>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="usernewout">
        <div class="usncont">
            <!-- 新改样式开始 -->
            <div class="box">

                <div class="div_box">
                    <div class="div_list" style="display:block;">
                        <div class="usnc_right">
                            <div class="rech_box">
                                <div class="rech_bd nmt" style="padding-top: 30px;">


                                    <ul>
                                        <li>
                                            <div class="shiftto">
                                                <p class="walletadres">您 将用<?php echo e($address->wallet_address); ?>向下边的地址充值</p>
                                                <p class="walletadres">这是您的钱包地址，请将您的 <b>比特币(BTC)</b> 充值此地址：</p>
                                                <p id="wallet"><?php echo e($wallet_address->address); ?></p>
                                                <div id="qrcode-wallet">
                                                    <div id="codeaa" style="width:200px;height:200px"></div>
                                                    <p>比特币(BTC)钱包地址</p>
                                                </div>
                                            </div>
                                            <div class="recharge_atten">
                                                <h5>充值说明</h5>
                                                <p>1. 温馨提示：在比特币(BTC)网络接收比特币(BTC)通常需要10分钟。我们会在收到比特币(BTC)网络2 个确认后给您入账。</p>
                                                <p>2.
                                                     </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php $__env->startSection("scripts"); ?>
    <script src="<?php echo e(asset('plugins/jquery.qrcode.min.js')); ?>"></script>
    <script>

        $('#codeaa').qrcode({
            render: "table", //table方式
            width: 220, //宽度
            height: 220, //高度
            text: "<?php echo e($wallet_address->address); ?>" //任意内容
        }); //任意字符串


    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>