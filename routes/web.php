<?php

use TCG\Voyager\Events\Routing;

// User Auth
Auth::routes();
Route::group(['prefix' => 'crm'], function () {
    Voyager::routes();
});


Route::get('email-verification/error', 'Auth\RegisterController@getVerificationError')->name('email-verification.error');

Route::group(['as' => 'bee.'], function () {
    event(new Routing());

    Route::post('password/change', 'UserController@changePassword')->middleware('auth');

    Route::group(['prefix' => 'chat'], function () {
        Route::get('/', function () {

            event(new \App\Events\Message("UserJoined", "", date('Y-m-d H:i:s')));

            return view('welcome');
        });

        Route::post('send_message', function (\Illuminate\Http\Request $request) {

            //print_r([$request->type, $request->content]);
            event(new App\Events\Message($request->type, $request->content, date('Y-m-d H:i:s')));

            return response()->json([
                'status' => 'success'
            ]);
        });
    });


    Route::get('/', 'IndexController@index');
    Route::get('/test', 'TestController@test')->name('test');
    Route::get('/mail', 'TestController@mail')->name('test');
    Route::get('/init', 'InitController@init');

// Search
    Route::get('search', 'HomeController@search');

// Discussion
    Route::resource('discussion', 'DiscussionController', ['except' => 'destroy']);



    Route::get('email-verification/check/{token}', 'Auth\RegisterController@getVerification')->name('email-verification.check');

    //邮箱验证成功
    Route::get('emails/verification-result/success', 'Auth\RegisterController@verificationSuccess')->name('email-verification.check');


    Route::get('/emails/verfication','Auth\RegisterController@verification');
    //邮箱验证失败
    Route::get('/emails/verification-result/failure', 'Auth\RegisterController@verificationFailure')->name('email-verification.check');



// User
    Route::group(['prefix' => 'user'], function () {
        Route::get('/', 'UserController@index');

        Route::group(['middleware' => 'auth'], function () {

            Route::get('/', 'UserController@index');
            Route::get('security', 'UserController@security');
            Route::get('trusted', 'UserController@trusted');
            Route::get('trusting', 'UserController@trusting');

            Route::get('blocking', 'UserController@blocking');

            Route::get('wallet', 'WalletController@index');
            Route::get('wallet/deposit/{id}', 'WalletController@depoist');
            Route::get('wallet/withdraw/{id}', 'WalletController@withdraw');

            Route::get('profile', 'UserController@edit');
            Route::get('ad', 'UserAdController@index');


            Route::put('profile/{id}', 'UserController@update');
            Route::post('follow/{id}', 'UserController@doFollow');
            Route::get('notification', 'UserController@notifications');
            Route::post('notification', 'UserController@markAsRead');
        });

        Route::group(['prefix' => '{username}'], function () {
            // Route::get('/', 'UserController@show');
            Route::get('comments', 'UserController@comments');
            Route::get('following', 'UserController@following');
            Route::get('discussions', 'UserController@discussions');
        });
    });

// User Setting
    Route::group(['middleware' => 'auth', 'prefix' => 'setting'], function () {
        Route::get('/', 'SettingController@index')->name('setting.index');
        Route::get('binding', 'SettingController@binding')->name('setting.binding');

        Route::get('notification', 'SettingController@notification')->name('setting.notification');
        Route::post('notification', 'SettingController@setNotification');


    });


    Route::group(['prefix' => 'ad'], function () {

        Route::get('create', 'AdController@create')->name('ad.create');
        Route::get('store', 'AdController@store');
        Route::get('detail/{id}', 'AdController@detail');

        Route::get('edit/{id}','AdController@edit')->name('ad.edit');
        Route::get('delete/{id}','AdController@delete')->name('ad.delete');

    });

//Route::get('ad/create', 'AdController@create')->name('ad.create');
//
//Route::post('ad/store', 'AdController@store');


//Route::get('trade/buy/{coin}', 'TradeController@overview')->name('trade.overview');
//Route::get('trade/buy/{coin}', 'TradeController@overview')->name('trade.overview');

// Category
    Route::group(['prefix' => 'trade'], function () {

        Route::get('/', 'TradeController@overview')->name('trade.overview');
        Route::get('/buy/{coin}', 'TradeController@buy')->name('trade.buy');
        Route::get('/sell/{coin}', 'TradeController@sell')->name('trade.overview');
    });


    //order
    Route::group(['prefix' => 'order'], function () {

        Route::get('info/{id}', 'OrderController@info')->name('order.info');

    });


// Link
    Route::get('link', 'LinkController@index');

// Category
    Route::group(['prefix' => 'category'], function () {
        Route::get('{category}', 'CategoryController@show');
        Route::get('/', 'CategoryController@index');
    });

// Tag
    Route::group(['prefix' => 'tag'], function () {
        Route::get('/', 'TagController@index');
        Route::get('{tag}', 'TagController@show');
    });

    /* Dashboard Index */
    Route::group(['prefix' => 'dashboard', 'middleware' => ['auth', 'admin']], function () {
        Route::get('{path?}', 'HomeController@dashboard')->where('path', '[\/\w\.-]*');
    });

// Article
    Route::get('/help', 'ArticleController@index');
    Route::get('{slug}', 'ArticleController@show');

    Route::get('/home', 'HomeController@index')->name('home');


});
