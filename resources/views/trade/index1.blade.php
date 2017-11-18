@extends('layouts.app')

@section('content')
    @component('particals.jumbotron')
        <h3>{{ config('trade.ad.title') }}</h3>

        <h6>{{ config('trade.ad.description') }}</h6>
    @endcomponent

    @include('widgets.trade')

    {{ $ads->links('pagination.default') }}

@endsection