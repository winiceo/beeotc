<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Auth::routes();

Route::prefix('auth')->group(function () {
    Route::get('{provider}', 'Auth\AuthController@redirectToProvider')->name('auth.provider');
    Route::get('{provider}/callback', 'Auth\AuthController@handleProviderCallback');
});

Route::prefix('admin')->middleware(['auth', 'role:admin'])->namespace('Admin')->as('admin.')->group(function () {
    Route::get('dashboard', 'ShowDashboard')->name('dashboard');
    Route::resource('posts', 'PostsController');
    Route::delete('/posts/{post}/thumbnail', 'PostsThumbnailController@destroy')->name('posts_thumbnail.destroy');
    Route::resource('users', 'UsersController', ['only' => ['index', 'edit', 'update']]);
    Route::resource('comments', 'CommentsController', ['only' => ['index', 'edit', 'update', 'destroy']]);
});

Route::middleware('auth')->group(function () {
    Route::prefix('settings')->group(function () {
        Route::get('account', 'UsersController@edit')->name('users.edit');
        Route::match(['put', 'patch'], 'account', 'UsersController@update')->name('users.update');

        Route::get('password', 'UserPasswordsController@edit')->name('users.password');
        Route::match(['put', 'patch'], 'password', 'UserPasswordsController@update')->name('users.password.update');

        Route::get('token', 'UserTokensController@edit')->name('users.token');
        Route::match(['put', 'patch'], 'token', 'UserTokensController@update')->name('users.token.update');
    });

    Route::resource('newsletter-subscriptions', 'NewsletterSubscriptionsController', ['only' => 'store']);
});


Route::as('site.')->group(function () {
    Route::get('/', 'PostsController@index')->name('home');
//    Route::get('/buy', 'TradeController@buy')->name('buy');
//    Route::get('/sell', 'TradeController@sell')->name('sell');
//    Route::get('/advert', 'TradeController@sell')->name('advert');


    Route::group(['prefix' => 'advert'], function () {

        Route::get('create', 'AdvertsController@create')->name('advert.create');
        Route::get('store', 'AdvertController@store');
        Route::get('detail/{id}', 'AdvertController@detail')->name('advert.detail');

        Route::get('edit/{id}', 'AdvertController@edit')->name('advert.edit');
        Route::get('delete/{id}', 'AdvertController@delete')->name('advert.delete');

    });


// Category
    Route::group(['prefix' => 'trade'], function () {

        Route::get('/', 'TradeController@overview')->name('trade.overview');
        Route::get('/buy/{coin}', 'TradeController@buy')->name('trade.buy')->where('id', '[0-9]+');;
        Route::get('/sell/{coin}', 'TradeController@sell')->name('trade.sell')->where('id', '[0-9]+');;
    });


    //order
    Route::group(['prefix' => 'order'], function () {

        Route::get('info/{id}', 'OrderController@info')->name('order.info');

    });


    Route::group(['prefix' => 'users'], function () {
        Route::get('/', 'AccountController@index');
        Route::get('/avatar/{id}', 'UserInfoController@avatar');


        Route::group(['middleware' => 'auth'], function () {

            Route::get('/', 'AccountController@index');
            Route::get('security', 'AccountController@security');
            Route::get('trusted', 'AccountController@trusted');
            Route::get('trusting', 'AccountController@trusting');

            Route::get('blocking', 'AccountController@blocking');

            Route::get('wallet', 'WalletController@index');
            Route::get('wallet/deposit/{id}', 'WalletController@depoist');
            Route::get('wallet/withdraw/{id}', 'WalletController@withdraw');

            Route::get('profile', 'AccountController@edit');
            Route::get('advert', 'AccountController@adverts')->name('users.adverts');


            Route::put('profile/{id}', 'AccountController@update');
            Route::post('follow/{id}', 'AccountController@doFollow');
            Route::get('notification', 'AccountController@notifications');
            Route::post('notification', 'AccountController@markAsRead');

            //更新用户资料
            Route::post('info', 'UserInfoController@update');


            //用户订单
            Route::get('orders', 'OrderController@overview')->name('users.orders');





        });

        Route::group(['prefix' => '{username}'], function () {
            // Route::get('/', 'AccountController@show');
            Route::get('comments', 'AccountController@comments');
            Route::get('following', 'AccountController@following');
            Route::get('discussions', 'AccountController@discussions');
        });
    });

    Route::resource('media', 'MediaController', ['only' => 'show']);
    Route::get('/posts.feed', 'PostsFeedController@index')->name('posts.feed');
    Route::resource('posts', 'PostsController', ['only' => 'show']);
    //Route::resource('users', 'UsersController', ['only' => 'show']);

    Route::get('newsletter-subscriptions/unsubscribe', 'NewsletterSubscriptionsController@unsubscribe')->name('newsletter-subscriptions.unsubscribe');

});


