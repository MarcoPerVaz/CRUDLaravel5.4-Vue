<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 5.4 - Vue</title>
        {{-- Styles --}}
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    </head>
    <body>
        <div class="container">

            @yield('content')
            
        </div>

        {{-- Scripts --}}
        {{-- Archivo generado después de compilar --}}
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
