<div class="container list">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <?php $__empty_1 = true; $__currentLoopData = $articles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $article): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <div class="media">
                <?php if($article->page_image): ?>
                <a class="media-left" href="<?php echo e(url($article->slug)); ?>">
                    <img alt="<?php echo e($article->slug); ?>" src="<?php echo e($article->page_image); ?>" data-holder-rendered="true">
                </a>
                <?php endif; ?>
                <div class="media-body">
                    <h6 class="media-heading">
                        <a href="<?php echo e(url($article->slug)); ?>">
                            <?php echo e($article->title); ?>

                        </a>
                    </h6>
                    <div class="meta">
                        <span class="cinema"><?php echo e($article->subtitle); ?></span>
                    </div>
                    <div class="description">
                        <?php echo e($article->meta_description); ?>

                    </div>
                    <div class="extra">
                        <?php $__currentLoopData = $article->tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <a href="<?php echo e(url('tag', ['tag' => $tag->tag])); ?>">
                            <div class="label"><i class="ion-pricetag"></i><?php echo e($tag->tag); ?></div>
                        </a>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                        <div class="info">
                            <i class="ion-person"></i><?php echo e(isset($article->user->name) ? $article->user->name : 'null'); ?>&nbsp;,&nbsp;
                            <i class="ion-clock"></i><?php echo e($article->published_at->diffForHumans()); ?>&nbsp;,&nbsp;
                            <i class="ion-ios-eye"></i><?php echo e($article->view_count); ?>

                            <a href="<?php echo e(url($article->slug)); ?>" class="pull-right">
                                Read More <i class="ion-ios-arrow-forward"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <h3 class="text-center"><?php echo e(lang('Nothing')); ?></h3>
            <?php endif; ?>
        </div>
    </div>
</div>