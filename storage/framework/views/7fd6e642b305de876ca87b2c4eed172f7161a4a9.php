<?php $__env->startSection('content'); ?>
    <div class="container setting">
        <div class="row">
            <div class="col-md-4">
                <?php echo $__env->make('setting.particals.sidebar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            </div>

            <div class="col-md-8">
                <div class="panel">
                    <div class="panel-heading"><?php echo e(lang('Reset Password')); ?></div>

                    <div class="panel-body">
                        <form class="form-horizontal" action="<?php echo e(url('password/change')); ?>" method="POST">
                            <?php echo e(csrf_field()); ?>


                            <div class="form-group<?php echo e($errors->has('old_password') ? ' has-error' : ''); ?>">
                                <label for="password" class="col-md-4 control-label text-right"><?php echo e(lang('Old Password')); ?></label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="old_password" required>

                                    <?php if($errors->has('old_password')): ?>
                                        <span class="help-block">
                                            <strong><?php echo e(trans($errors->first('old_password'))); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="form-group<?php echo e($errors->has('password') ? ' has-error' : ''); ?>">
                                <label for="password" class="col-md-4 control-label text-right"><?php echo e(lang('New Password')); ?></label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required>

                                    <?php if($errors->has('password')): ?>
                                        <span class="help-block">
                                            <strong><?php echo e(trans($errors->first('password'))); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="form-group<?php echo e($errors->has('password_confirmation') ? ' has-error' : ''); ?>">
                                <label for="password" class="col-md-4 control-label text-right"><?php echo e(lang('Confirm New Password')); ?></label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password_confirmation" required>

                                    <?php if($errors->has('password_confirmation')): ?>
                                        <span class="help-block">
                                            <strong><?php echo e(trans($errors->first('password_confirmation'))); ?></strong>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    <button style="submit" class="btn btn-primary"><?php echo e(lang('Update Password')); ?></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>