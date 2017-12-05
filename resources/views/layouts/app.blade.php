<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('static/app.css') }}" rel="stylesheet">

    <script>

        window.App=@json(leven());
        window.Language = '{{ config('app.locale') }}';

        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>


       // window.app=@json($app);
    </script>




</head>

@yield('styles')
<body>


<div id="app">
    @include('particals.navbar')
 
    <div class="main">


        @yield('content')
    </div>

    @include('particals.footer')
</div>
<script src="{{ asset('lib/RongIMLib-2.2.9.js') }}"></script>
<script src="{{ asset('lib/im.js') }}"></script>
<!-- Scripts -->
<script src="{{ mix('js/home.js') }}"></script>
<script>
    console.log(BeeChat)
</script>    
@yield('scripts')

<script>
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
</script>

@if(config('blog.google.open'))
    <script>
        {{--(function (i, s, o, g, r, a, m) {--}}
            {{--i['GoogleAnalyticsObject'] = r;--}}
            {{--i[r] = i[r] || function () {--}}
                {{--(i[r].q = i[r].q || []).push(arguments)--}}
            {{--}, i[r].l = 1 * new Date();--}}
            {{--a = s.createElement(o),--}}
                {{--m = s.getElementsByTagName(o)[0];--}}
            {{--a.async = 1;--}}
            {{--a.src = g;--}}
            {{--m.parentNode.insertBefore(a, m)--}}
        {{--})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');--}}

        {{--ga('create', '{{ config('blog.google.id') }}', 'auto');--}}
        {{--ga('send', 'pageview');--}}
    </script>
@endif


