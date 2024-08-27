<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Primary Meta Tags -->
        <title>{{ $title ?? 'Hey, it\'s Bill' }}</title>
        <meta name="title" content="Bill Billy Style" />
        <meta name="description" content="Website for things generally related to Bill" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://billkeuth.com/" />
        <meta property="og:title" content="Howdy!" />
        <meta property="og:description" content="Website for things generally related to Bill" />
        <meta property="og:image" content="{{ asset('images/meta/bernal.jpg') }}" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://billkeuth.com/" />
        <meta property="twitter:title" content="Howdy!" />
        <meta property="twitter:description" content="Website for things generally related to Bill" />
        <meta property="twitter:image" content="{{ asset('images/meta/bernal.jpg') }}" />

        <!-- Meta Tags Generated with https://metatags.io -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
