<div style="width:100%;padding:20px; background-color: #0c0c0c;height: 200px">

        <?php $__currentLoopData = $balances; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $balance): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <ul style="float:left; padding-right: 100px; color:red;">
            <li class="moneyinfo">
                <h3 style="color:#eee;font-size: 14px;font-weight: normal;line-height: 40px;"><?php echo e($balance->coin_name); ?>钱包余额：</h3>
                <p class="p_new">可用：<span class="span_new span_new1"><?php echo (($balance->total_balance-$balance->block_balance)/100000000); ?></span>
                     </p>
                <p class="p_new">冻结：<span class="span_new span_new1"><?php echo ($balance->block_balance/100000000); ?></span>
                     </p>
                <p class="p_new">总计：<span class="span_new span_new2"><?php echo ($balance->total_balance/100000000); ?></span>
                     </p>
            </li>
        </ul>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div>