<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="{{ url('/') }}">{{ __('trade.Index')}} <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ url('trade') }}">{{ __('trade.Trade') }}</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="{{ url('ad/create') }}">{{ __('trade.New Ad') }}</a>
            </li>


            <li class="nav-item">
                <a class="nav-link" href="{{ url('user/wallet') }}">{{ lang('Wallet') }}</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="{{ url('help') }}">{{ __('trade.Help') }}</a>
            </li>


        </ul>

        <ul class="nav navbar-nav navbar-right">
            <!-- Search Box -->


            <!-- Authentication Links -->
            @if (Auth::guest())
                <li style="margin-right:20px;"><a href="{{ url('login') }}">{{ lang('Login') }}</a></li>
                <li><a href="{{ url('register') }}">{{ lang('Register') }}</a></li>
            @else
                <li class="notification">
                   
                    <a href="{{ url('user/notification') }}"><i class="ion-android-notifications">
                            <span class="new"
                                  @if (Auth::user()->unreadNotifications->count() > 0)
                                  style='display: block'
                                    @endif
                            >
                            </span>
                        </i></a>
                </li>

                <li class="notification">
                    <a href="{{ url('user/orders') }}"> 我的订单</a>
                </li>



                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false"> {{ Auth::user()->nickname ?: Auth::user()->name }}
                        <b class="caret"></b>&nbsp;&nbsp;
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="{{ url('user') }}"><i
                                    class="ion-person"></i>{{ lang('Personal Center') }}</a>


                        <a class="dropdown-item" href="{{ url('/user/ad') }}"><i
                                    class="ion-person"></i>{{ lang('My Ad') }}</a>


                        <a class="dropdown-item" href="{{ url('setting') }}"><i
                                    class="ion-gear-b"></i>{{ lang('Settings') }}</a>
                        @if(Auth::user()->is_admin)
                            <a class="dropdown-item" href="{{ url('dashboard') }}"><i
                                        class="ion-ios-speedometer"></i>{{ lang('Dashboard') }}</a>

                        @endif

                        <a class="dropdown-item" href="{{ url('logout') }}"
                           onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                            <i class="ion-log-out"></i>{{ lang('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ url('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </div>


                </li>
            @endif
        </ul>

    </div>
</nav>
