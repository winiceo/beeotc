@extends('layouts.web')

@section('body')
    <div class="container">
        @include('layouts._alerts')

        @yield('content')
    </div>
@endsection
