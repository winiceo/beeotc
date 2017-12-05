<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3" style="margin-top: 50px;">
            <div class="well bs-component">
                <form class="form-horizontal" role="form" method="POST" action="<?php echo e(url('/login')); ?>">
                    <?php echo e(csrf_field()); ?>


                    <fieldset>
                        <legend class="text-center"><?php echo e(lang('Login')); ?></legend>
                        <div class="form-group<?php echo e($errors->has('email') ? ' has-error' : ''); ?>">
                            <div class="col-md-10 col-md-offset-1">
                                <label class="control-label" for="email"><?php echo e(lang('Email')); ?></label>
                                <input id="email" type="email" class="form-control" name="email" value="<?php echo e(old('email')); ?>" placeholder="<?php echo e(lang('Input Email')); ?>" required autofocus>

                                <?php if($errors->has('email')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('email')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                        <div class="form-group<?php echo e($errors->has('password') ? ' has-error' : ''); ?>">
                            <div class="col-md-10 col-md-offset-1">
                                <label class="control-label" for="password"><?php echo e(lang('Password')); ?></label>
                                <input id="password" type="password" class="form-control" name="password" placeholder="<?php echo e(lang('Input Password')); ?>" required>

                                <?php if($errors->has('password')): ?>
                                    <span class="help-block">
                                        <strong><?php echo e($errors->first('password')); ?></strong>
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-1">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> <?php echo e(lang('Remember Me')); ?>

                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-lg-10 col-lg-offset-1">
                                <button type="submit" class="btn btn-success form-control">
                                    <?php echo e(lang('Login')); ?>

                                </button>
                            </div>
                        </div>

                        <?php if(config('services.github.client_id')): ?>
                        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div class="strike">
                                <span>or</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-lg-10 col-lg-offset-1">
                                <a href="<?php echo e(url('/auth/github')); ?>" class="btn btn-primary form-control">
                                    <i class="ion-social-github"></i> <?php echo e(lang('Login With Github')); ?>

                                </a>
                            </div>
                        </div>
                        <?php endif; ?>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-2 text-center">
                                <a class="btn btn-link" href="<?php echo e(url('/password/reset')); ?>">
                                    <?php echo e(lang('Forgot Password')); ?>

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