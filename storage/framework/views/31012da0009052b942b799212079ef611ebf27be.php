<div class="top_monkey">
    <div class="topinfo">

        <?php $__empty_1 = true; $__currentLoopData = $wallets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $wallet): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
        <ul>
            <li class="moneyinfo">
                <h3 style="color:#eee;font-size: 14px;font-weight: normal;line-height: 40px;"><?php if($wallet->coin_type==1): ?> btc <?php else: ?> ETh <?php endif; ?> 钱包余额：</h3>
                <p class="p_new">可用：<span class="span_new"><?php echo e($wallet->can_balance); ?> </span>
                    </p>
                <p class="p_new">冻结：<span class="span_new span_new1"><?php echo e($wallet->block_balance); ?> </span>
                    </p>
                <p class="p_new">总计：<span class="span_new span_new2"><?php echo e($wallet->total_balance); ?> </span>
                    </p>
            </li>
        </ul>

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        </div>
</div>