<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    
    <script>
        window.Language = '{{ config('app.locale') }}';

        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>

    
</head>
<body>


<div id="app">
    @include('particals.navbar')

    <div class="main">


        @yield('content')
    </div>

    @include('particals.footer')
</div>

<!-- Scripts -->
<script src="{{ mix('js/home.js') }}"></script>
 

