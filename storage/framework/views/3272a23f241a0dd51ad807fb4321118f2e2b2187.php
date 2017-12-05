<?php $__env->startSection('styles'); ?>

    <link rel="stylesheet" href="<?php echo e(asset('lib/layui/css/layui.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('static/im.css')); ?>">


<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div style="padding:100px;">

    <vue-chat></vue-chat>
    </div>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('scripts'); ?>

    <script src="<?php echo e(asset('lib/layui/layui.js')); ?>"></script>

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

            $("#payFinish").click(function(){
                    ajax.post('/api/chat/order/pay', {orderid:App.order.id})
                    .then(function (res) {

                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            })


            $("#cancel").click(function(){
                ajax.post('/api/chat/order/cancel', {orderid:App.order.id})
                    .then(function (res) {

                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            })


        })
    </script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>