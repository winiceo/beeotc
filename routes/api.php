<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use Illuminate\Contracts\Routing\Registrar as RouteContract;


//$api->get('/bootstrappers', function ( ) {
//    $data = [
//        'app_name' => 'beeotc',
//    ];
//    return response()->json($data);
//
//});
//Route::post('/v2/user/login', 'Api\AuthenticateController@login');;


//// $api->get('/bootstrappers', API2\BootstrappersController::class . '@show');
//
Route::group(['prefix' => 'test'], function () {
    Route::match(['GET', 'POST'], '', 'Api\TestController@profile');

    Route::get('/chat',function(){
        event(new App\Events\OrderPay(\App\Model\User::find(1),
            \App\Model\Order::find(1),'234234'));

    });
});


Route::group(['prefix' => 'v2', 'namespace' => 'Api'], function (RouteContract $api) {
    Route::post('user/login', 'AuthenticateController@login');
    Route::post('user/register', 'AuthenticateController@register');

    $api->group(['prefix' => 'user'], function () use ($api) {
        $api->post('/profile', 'UserController@profile');
        $api->post('/logout', 'UserController@logout');
        $api->post('/safe/check', 'UserController@check');
        $api->post('/advert', 'AdvertController@getByUser')->middleware(['auth:api']);
        $api->post('/order', 'OrderController@getByUser')->middleware(['auth:api']);

    });
//
//    $api->group('/finance', function () use($api) {
//        $api->post('/depoist', 'UserController@depoist');
//        $api->post('/withdraw', 'UserController@withdraw');
//    })->middleware('auth:api');
//
//
    $api->group(['prefix' => 'wallet', 'middleware' => ['auth:api']], function () use ($api) {

        $api->post('/deposit/{id}', 'WalletController@deposit');
        $api->post('/withdraw', 'WalletController@withdraw');
        $api->post('/withdraw/history', 'WalletController@history');

    });


    $api->group(['prefix' => 'advert', 'middleware' => ['auth:api']], function () use ($api) {
        $api->post('', 'AdvertController@overview');
        $api->post('/store', 'AdvertController@store');
        $api->post('/detail/{id}', 'AdvertController@show');
    });


    $api->group(['prefix'=>'verifycodes'], function () use ($api) {
        $api->post('', 'CommonController@captcha');
        $api->post('/register', 'CommonController@captchaReg');
    });

    $api->group(['prefix' => 'order', 'middleware' => ['auth:api']], function () use ($api) {
        $api->post('/detail/{id}', 'OrderController@show');
        $api->post('/store', 'OrderController@store');
        $api->post('/pay', 'OrderController@pay');
        $api->post('/cancel', 'OrderController@cancel');
        $api->post('/release', 'OrderController@release');
        $api->post('/comment', 'OrderController@comment');
        $api->post('/complaint', 'OrderController@complaint');

    });

    $api->group(['prefix' => 'im', 'middleware' => ['auth:api']], function () use ($api) {
        $api->post('/message/send', 'ImController@send');
        $api->post('/message/history', 'ImController@history');
        $api->post('/upload', 'ImController@upload');
    });

});


Route::prefix('v1')->namespace('Api\V1')->group(function () {
    Route::middleware('auth:api')->group(function () {
        // Comments
        Route::resource('comments', 'CommentsController', ['only' => 'destroy']);
        Route::resource('posts.comments', 'PostCommentsController', ['only' => 'store']);

        // Posts
        Route::resource('posts', 'PostsController', ['only' => ['update', 'store', 'destroy']]);
        Route::delete('/posts/{post}/thumbnail', 'PostsThumbnailController@destroy')->name('posts.thumbnail.destroy');
        Route::post('/posts/{post}/likes', 'PostLikesController@store')->name('posts.likes.store');
        Route::delete('/posts/{post}/likes', 'PostLikesController@destroy')->name('posts.likes.destroy');

        // Users
        Route::resource('users', 'UsersController', ['only' => 'update']);
    });

    Route::post('/authenticate', 'Auth\AuthenticateController@authenticate')->name('authenticate');

    // Comments
    Route::resource('posts.comments', 'PostCommentsController', ['only' => 'index']);
    Route::resource('users.comments', 'UserCommentsController', ['only' => 'index']);
    Route::resource('comments', 'CommentsController', ['only' => ['index', 'show']]);

    // Posts
    Route::resource('posts', 'PostsController', ['only' => ['index', 'show']]);
    Route::resource('users.posts', 'UserPostsController', ['only' => 'index']);

    // Users
    Route::resource('users', 'UsersController', ['only' => ['index', 'show']]);
});