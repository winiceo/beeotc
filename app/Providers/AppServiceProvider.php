<?php

namespace App\Providers;

use App\Model\Advert;
use Illuminate\Database\Eloquent\Relations\Relation;
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
