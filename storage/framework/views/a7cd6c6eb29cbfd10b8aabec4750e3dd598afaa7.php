<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="<?php echo e(url('/')); ?>"><?php echo e(__('trade.Index')); ?> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="<?php echo e(url('trade')); ?>"><?php echo e(__('trade.Trade')); ?></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="<?php echo e(url('ad/create')); ?>"><?php echo e(__('trade.New Ad')); ?></a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="<?php echo e(url('user/wallet')); ?>"><?php echo e(lang('Wallet')); ?></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="<?php echo e(url('help')); ?>"><?php echo e(__('trade.Help')); ?></a>
            </li>


        </ul>

        <ul class="nav navbar-nav navbar-right">
            <!-- Search Box -->


            <!-- Authentication Links -->
            <?php if(Auth::guest()): ?>
                <li style="margin-right:20px;"><a href="<?php echo e(url('login')); ?>"><?php echo e(lang('Login')); ?></a></li>
                <li><a href="<?php echo e(url('register')); ?>"><?php echo e(lang('Register')); ?></a></li>
            <?php else: ?>
                <li class="notification">
                   
                    <a href="<?php echo e(url('user/notification')); ?>"><i class="ion-android-notifications">
                            <span class="new"
                                  <?php if(Auth::user()->unreadNotifications->count() > 0): ?>
                                  style='display: block'
                                    <?php endif; ?>
                            >
                            </span>
                        </i></a>
                </li>

                <li class="notification">
                    <a href="<?php echo e(url('user/orders')); ?>"> 我的订单</a>
                </li>



                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false"> <?php echo e(Auth::user()->nickname ?: Auth::user()->name); ?>

                        <b class="caret"></b>&nbsp;&nbsp;
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="<?php echo e(url('user')); ?>"><i
                                    class="ion-person"></i><?php echo e(lang('Personal Center')); ?></a>


                        <a class="dropdown-item" href="<?php echo e(url('/user/ad')); ?>"><i
                                    class="ion-person"></i><?php echo e(lang('My Ad')); ?></a>


                        <a class="dropdown-item" href="<?php echo e(url('setting')); ?>"><i
                                    class="ion-gear-b"></i><?php echo e(lang('Settings')); ?></a>
                        <?php if(Auth::user()->is_admin): ?>
                            <a class="dropdown-item" href="<?php echo e(url('dashboard')); ?>"><i
                                        class="ion-ios-speedometer"></i><?php echo e(lang('Dashboard')); ?></a>

                        <?php endif; ?>

                        <a class="dropdown-item" href="<?php echo e(url('logout')); ?>"
                           onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                            <i class="ion-log-out"></i><?php echo e(lang('Logout')); ?>

                        </a>

                        <form id="logout-form" action="<?php echo e(url('logout')); ?>" method="POST" style="display: none;">
                            <?php echo e(csrf_field()); ?>

                        </form>
                    </div>


                </li>
            <?php endif; ?>
        </ul>

    </div>
</nav>
