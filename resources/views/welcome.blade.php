<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 5.4 - Vue</title>
        {{-- Styles --}}
        {{-- Boostrap 3.3.7 --}}
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    </head>
    <body>
        <div id="main">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <h1>Lista VueJs - Ajax con Axios</h1>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="item in lists">
                                @{{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-7">
                        <h1>JSON</h1>
                        <pre>
                            @{{ $data }}
                        </pre>
                    </div>
                </div>
            </div>
        </div>

        {{-- Scripts --}}
        {{-- Archivo generado después de compilar --}}
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
