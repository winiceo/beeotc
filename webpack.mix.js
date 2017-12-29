let mix = require('laravel-mix');
const path = require('path');
mix.webpackConfig({
    output: {
        publicPath: "/",
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'components': 'assets/js/components',
            'config': 'assets/js/config',
            'lang': 'assets/js/lang',
            'plugins': 'assets/js/plugins',
            'vendor': 'assets/js/vendor',
            'views': 'assets/js/views',
            'dashboard': 'assets/js/views/dashboard',
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, "resources")
        ]
    },
})


mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['vue'])

    .sass('resources/assets/sass/app.scss', 'public/css');

mix.js('resources/assets/admin/js/admin.js', 'public/js')
    .sass('resources/assets/admin/sass/admin.scss', 'public/css')
    .copy('node_modules/trumbowyg/dist/ui/icons.svg', 'public/js/ui/icons.svg');
