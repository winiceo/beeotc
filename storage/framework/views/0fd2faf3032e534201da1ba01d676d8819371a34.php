<?php $__env->startSection('styles'); ?>
    <style>
        .usernewout .usncont {
            width: 1500px;
            height: auto;
            overflow: hidden;
            margin: 0 auto;
            padding: 30px 0;
            margin-bottom: 30px;
        }
         .usernewout .usncont .usnc_right {
            width: 1478px;
            min-height: 614px;
            height: auto;
            overflow: hidden;
            float: right;
            padding-bottom: 50px;
            background: #fff;
            border: 1px solid #e9e9e9;
        }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="">
        <div class="usernewout">


            <div class="usncont">
                <!--左侧菜单-->


                <?php echo $__env->yieldContent('userright'); ?>

            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>