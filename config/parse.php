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

return [

    /*
    |--------------------------------------------------------------------------
    | Parse App Id
    |--------------------------------------------------------------------------
    |
    | Here you may specify your parse app id.
    |
    */

    'app_id' =>  env('PARSE_SERVER_APPLICATION_ID'),

    /*
    |--------------------------------------------------------------------------
    | Parse Rest Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your parse rest key.
    |
    */

    'rest_key' => env('PARSE_SERVER_REST_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Parse Master Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your parse master key.
    |
    */

    'master_key' => env('PARSE_SERVER_MASTER_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Parse Server URL
    |--------------------------------------------------------------------------
    |
    | Here you may specify your parse server url.
    |
    */

    'server_url' => env('PARSE_SERVER_URL'),

    /*
    |--------------------------------------------------------------------------
    | Parse Mount Point
    |--------------------------------------------------------------------------
    |
    | Here you may specify your parse mount point.
    |
    */

    'mount_path' => env('PARSE_SERVER_MOUNT'),

    /*
    |--------------------------------------------------------------------------
    | Parse Session Handler
    |--------------------------------------------------------------------------
    |
    | Here you may specify your parse session handler.
    | Use 'laravel' if you want to use Laravel's session or blank if you don't.
    |
    */

    'session' => 'laravel',

];
