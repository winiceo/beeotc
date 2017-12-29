<?php

/*
 * This file is part of Laravel Parse.
 *
 * (c) Graham Campbell <graham@alt-three.com>
 * (c) Prosper Otemuyiwa <prosperotemuyiwa@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Providers;

use App\Service\ParseSessionStorage;
use Illuminate\Foundation\Application as LaravelApplication;
use Illuminate\Support\ServiceProvider;
 use Parse\ParseClient;

/**
 * This is the parse service provider class.
 *
 * @author Graham Campbell <graham@alt-three.com>
 */
class ParseServiceProvider extends ServiceProvider
{
    /**
     * Boot the service provider.
     *
     * @return void
     */
    public function boot()
    {
        $this->setupConfig();

        $this->setupParse();




    }

    /**
     * Setup the config.
     *
     * @return void
     */
    protected function setupConfig()
    {
        $source = realpath(__DIR__.'/../../config/parse.php');

        if ($this->app instanceof LaravelApplication && $this->app->runningInConsole()) {
            $this->publishes([$source => config_path('parse.php')]);
        }

        $this->mergeConfigFrom($source, 'parse');
    }

    /**
     * Setup parse.
     *
     * @return void
     */
    protected function setupParse()
    {
        $config = $this->app->config->get('parse');

        ParseClient::initialize($config['app_id'], $config['rest_key'], $config['master_key']);

        if (isset($config['server_url']) && isset($config['mount_path'])) {
            $serverURL = rtrim($config['server_url'], '/');
            $mountPath = trim($config['mount_path'], '/').'/';

            ParseClient::setServerURL($serverURL, $mountPath);
        }

        if (isset($config['session']) && $config['session'] === 'laravel') {
            ParseClient::setStorage(new ParseSessionStorage($this->app->session));
        }
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Get the services provided by the provider.
     *
     * @return string[]
     */
    public function provides()
    {
        return [
            //
        ];
    }
}
