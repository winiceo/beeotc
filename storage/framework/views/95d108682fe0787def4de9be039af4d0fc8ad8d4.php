<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3" style="margin-top: 50px;">
            <div class="well bs-component">
                <form class="form-horizontal" role="form" method="POST" action="<?php echo e(url('/register')); ?>">
                    <?php echo e(csrf_field()); ?>


                    <fieldset>
                        <legend class="text-center"><?php echo e(lang('Register')); ?></legend>

                        <div class="form-group<?php echo e($errors->has('name') ? ' has-error' : ''); ?>">
                            <div class="col-md-10 col-md-offset-1">
                                <label for="name" class="control-label"><?php echo e(lang('Username')); ?></label>
                                <input id="name" type="text" class="form-control" name="name" value="<?php echo e(old('name')); ?>" placeholder="<?php echo e(lang('Input Name')); ?>" required autofocus>

                                <?php if($errors->has('name')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('name')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="form-group<?php echo e($errors->has('email') ? ' has-error' : ''); ?>">
                            <div class="col-md-10 col-md-offset-1">
                                <label for="email" class="control-label"><?php echo e(lang('Email')); ?></label>
                                <input id="email" type="email" class="form-control" name="email" value="<?php echo e(old('email')); ?>" placeholder="<?php echo e(lang('Input Email')); ?>" required>

                                <?php if($errors->has('email')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('email')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="form-group<?php echo e($errors->has('password') ? ' has-error' : ''); ?>">
                            <div class="col-md-10 col-md-offset-1">
                                <label for="password" class="control-label"><?php echo e(lang('Password')); ?></label>
                                <input id="password" type="password" class="form-control" name="password" placeholder="<?php echo e(lang('Input Password')); ?>" required>

                                <?php if($errors->has('password')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('password')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="form-group<?php echo e($errors->has('password_confirmation') ? ' has-error' : ''); ?>">
                            <div class="col-md-10 col-md-offset-1">
                                <label for="password-confirm" class="control-label"><?php echo e(lang('Confirm Password')); ?></label>

                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="<?php echo e(lang('Input Confirm Password')); ?>" required>

                                <?php if($errors->has('password_confirmation')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('password_confirmation')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-lg-10 col-lg-offset-1">
                                <button type="submit" class="btn btn-primary form-control">
                                    <?php echo e(lang('Register')); ?>

                                </button>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-2 text-center">
                                <a class="btn btn-link" href="<?php echo e(url('/login')); ?>">
                                    <?php echo e(lang('Has Account')); ?>

                                </a>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>