<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo e(config('app.name', 'Laravel')); ?></title>


    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(asset('static/app.css')); ?>" rel="stylesheet">

    <script>

        window.App=<?php echo json_encode(leven(), 15, 512) ?>;
        window.Language = '<?php echo e(config('app.locale')); ?>';

        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>


       // window.app=<?php echo json_encode($app, 15, 512) ?>;
    </script>




</head>

<?php echo $__env->yieldContent('styles'); ?>
<body>


<div id="app">
    <?php echo $__env->make('particals.navbar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
 
    <div class="main">


        <?php echo $__env->yieldContent('content'); ?>
    </div>

    <?php echo $__env->make('particals.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</div>
<script src="<?php echo e(asset('lib/RongIMLib-2.2.9.js')); ?>"></script>
<script src="<?php echo e(asset('lib/im.js')); ?>"></script>
<!-- Scripts -->
<script src="<?php echo e(mix('js/home.js')); ?>"></script>
<script>
    console.log(BeeChat)
</script>    
<?php echo $__env->yieldContent('scripts'); ?>

<script>
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
</script>

<?php if(config('blog.google.open')): ?>
    <script>
        
            
            
                
            
            
                
            
            
            
        

        
        
    </script>
<?php endif; ?>


