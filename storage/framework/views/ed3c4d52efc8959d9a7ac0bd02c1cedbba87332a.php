<?php $__env->startSection('content'); ?>
    <div class="container setting">
        <div class="row">
            <div class="col-md-4">
                <?php echo $__env->make('setting.particals.sidebar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            </div>

            <div class="col-md-8">
                <div class="panel">
                    <div class="panel-heading"><?php echo e(lang('Account Binding')); ?></div>

                    <div class="panel-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-md-4 control-label text-right"><?php echo e(lang('Binding Github')); ?></label>
                                <div class="col-md-6">
                                    <?php if(!Auth::user()->github_id && config('services.github.client_id')): ?>
                                        <a href="<?php echo e(url('auth/github')); ?>" class="btn btn-default">
                                            <i class="ion-social-github"></i> Github
                                        </a>
                                    <?php else: ?>
                                        <button class="btn btn-default" disabled>
                                            <i class="ion-social-github"></i> Github
                                        </button>
                                    <?php endif; ?>
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