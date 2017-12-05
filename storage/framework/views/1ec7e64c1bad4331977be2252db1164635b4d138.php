<?php $__env->startSection('content'); ?>
    <?php $__env->startComponent('particals.jumbotron'); ?>
        <h3><?php echo e(config('blog.article.title')); ?></h3>

        <h6><?php echo e(config('blog.article.description')); ?></h6>
    <?php echo $__env->renderComponent(); ?>

    <?php echo $__env->make('widgets.article', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

    <?php echo e($articles->links('pagination.default')); ?>


<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>