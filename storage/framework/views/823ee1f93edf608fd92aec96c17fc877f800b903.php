


<div class=" ">
    <div class="usncont">
        <div>

            <div class="table_trade">
                <table>
                    <tbody>

                    <tr>
                        <th>币种名称</th>
                        <th>钱包标识</th>
                        <th>钱包地址</th>
                        <th>添加时间</th>
                        <th>操作</th>
                    </tr>

                    <?php $__empty_1 = true; $__currentLoopData = $addresss; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>


                        <tr>
                            <td><?php echo e($address->coin_type); ?></td>
                            <td><?php echo e($address->wallet_name); ?></td>
                            <td><?php echo e($address->wallet_address); ?></td>
                            <td><?php echo e($address->created_at); ?></td>

                            <td><a href="<?php echo e(url('user/wallet/deposit',['id'=>$address->id])); ?>" >充值</a>&nbsp;&nbsp;&nbsp;<a href="<?php echo e(url('user/wallet/withdraw',['id'=>$address->id])); ?>">提币</a> </td>
                        </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
