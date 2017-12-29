<?php

namespace App\Providers;

use App\Model\Advert;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Blade;
use \Queue;
use  \Log;
use Illuminate\Support\ServiceProvider;
use Psr\Log\LoggerInterface;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->bootEloquentMorphs();
        $this->bootMacros();


        $lang = config('app.locale') != 'zh_cn' ? config('app.locale') : 'zh';
        \Carbon\Carbon::setLocale($lang);

        Blade::directive('leven', function ($expression) {
            return "<?php echo leven($expression); ?>";
        });
        Blade::directive('coin', function ($expression) {
            return "<?php echo ($expression/100000000); ?>";
        });



    }

    private function bootEloquentMorphs()
    {
        Relation::morphMap([
            Advert::TABLE => Advert::class,
        ]);
    }

    public function bootMacros()
    {
        require base_path('resources/macros/blade.php');
    }

    public function register()
    {
        //$this->app->alias('bugsnag.multi', Log::class);
        //$this->app->alias('bugsnag.multi', LoggerInterface::class);
    }
}
