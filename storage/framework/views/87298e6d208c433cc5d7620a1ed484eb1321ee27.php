<?php $__env->startSection('userright'); ?>
     <div class="usnc_right">
        <div style="padding-top: 20px;">
            <wallet-add coins='<?php echo json_encode($coins, 15, 512) ?>'></wallet-add>
        </div>

        <?php echo $__env->make('wallet.particals.blance', ['balances' => $user->wallets()->get()], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>


        <div class="recharge_list nmt">


            <?php echo $__env->make('wallet.address', ['addresss' => $user->addresss()->paginate(5)], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

            <?php echo e($addresss->links('pagination.default')); ?>



        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('wallet.layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>