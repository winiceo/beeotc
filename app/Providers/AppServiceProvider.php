<?php

namespace App\Providers;

use App\Article;
use App\Discussion;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use App\Tools\FileManager\BaseManager;
use App\Tools\FileManager\UpyunManager;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $lang = config('app.locale') != 'zh_cn' ? config('app.locale') : 'zh';
        \Carbon\Carbon::setLocale($lang);

        Blade::directive('leven', function ($expression) {
            return "<?php echo leven($expression); ?>";
        });

        Relation::morphMap([
            'discussions' => Discussion::class,
            'articles'    => Article::class,
        ]);



    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('uploader', function ($app) {
            $config = config('filesystems.default', 'public');

            if ($config == 'upyun') {
                return new UpyunManager();
            }

            return new BaseManager();
        });

        $this->app->singleton('rcloud', function ($app) {
            $config = [
                'app_key' => env('RONG_CLOUD_APP_KEY'),
                'app_secret' => env('RONG_CLOUD_APP_SECRET')
            ];
            return new \App\Im\RongCloud($config['app_key'],$config['app_secret']);
        });
    }
}
