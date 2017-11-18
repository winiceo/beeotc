@extends('layouts.app')

@section('content')
    <div class="">
        <div class="usernewout">
            @include('user.particals.blance')

            <div class="usncont">
                <!--左侧菜单-->
                @include('user.particals.side')

                @yield('userright')

            </div>
        </div>
    </div>
@endsection