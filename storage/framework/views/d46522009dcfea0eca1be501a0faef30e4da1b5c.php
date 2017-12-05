<div class="panel panel-info">
    <div class="panel-heading"><?php echo e(lang('Settings')); ?></div>

    <div class="list-group">
        <a href="<?php echo e(url('setting')); ?>" class="list-group-item <?php echo e(isActive('setting.index')); ?>">
            <i class="ion-ios-barcode-outline"></i><?php echo e(lang('Account Setting')); ?>

        </a>
        <?php if(config('blog.mail_notification')): ?>
        <a href="<?php echo e(url('setting/notification')); ?>" class="list-group-item <?php echo e(isActive('setting.notification')); ?>">
            <i class="ion-android-notifications-none"></i><?php echo e(lang('Notification Setting')); ?>

        </a>
        <?php endif; ?>
        <a href="<?php echo e(url('setting/binding')); ?>" class="list-group-item <?php echo e(isActive('setting.binding')); ?>">
            <i class="ion-lock-combination"></i><?php echo e(lang('Account Binding')); ?>

        </a>
    </div>
</div>