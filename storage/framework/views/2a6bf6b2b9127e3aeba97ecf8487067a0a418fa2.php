



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

                    <?php $__empty_1 = true; $__currentLoopData = $withdraws; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $withdraw): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>


                        <tr>
                            <td><?php echo e($withdraw->address); ?></td>
                            <td><?php echo e($withdraw->address); ?></td>
                            <td><?php echo e($withdraw->address); ?></td>
                            <td><?php echo e($withdraw->address); ?></td>
                            <td><?php echo e($withdraw->address); ?></td>


                         </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
