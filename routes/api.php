<?php
use Illuminate\Contracts\Routing\Registrar as RouteContract;



Route::group([
    'middleware' => ['cors'],
    'prefix' => 'admin',
    'namespace' => 'Api'], function ( ) {

    Route::get('cms/notice',  'NoticeController@index');
    Route::get('json/setting',  'HomeController@setting');



    /*
    | 应用启动配置.
    */

//    $api->get('/bootstrappers', BootstrappersController::class . '@show');

    // Create user authentication token
    Route::post('tokens',  'TokenController@store');
    Route::get('tokens',  'TokenController@refresh');


    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');




    // Refresh token
    //$api->patch('/tokens/{token}',  TokenController::class . '@refresh');
});

Route::group([
    'middleware' => ['auth:api', 'admin'],
    'namespace' => 'Api',
], function () {




    Route::get('statistics', 'HomeController@statistics');

    Route::resource('user', 'UserController', ['except' => ['create', 'show']]);
    Route::post('/user/{id}/status', 'UserController@status');

    Route::resource('article', 'ArticleController', ['names' => [
        'index' => 'api.article.index',
        'store' => 'api.article.store',
        'edit' => 'api.article.edit',
        'update' => 'api.article.update',
        'destroy' => 'api.article.destroy',
    ],'except' => ['create', 'show']]);

    Route::resource('category', 'CategoryController', ['except' => ['create', 'show']]);
    Route::get('/categories', 'CategoryController@getList');
    Route::post('/category/{id}/status', 'CategoryController@status');

    Route::resource('discussion', 'DiscussionController', ['except' => ['create', 'show']]);
    Route::post('/discussion/{id}/status', 'DiscussionController@status');

    Route::resource('comment', 'CommentController', ['except' => ['create']]);

    Route::resource('tag', 'TagController', ['except' => ['create', 'show']]);
    Route::post('/tag/{id}/status', 'TagController@status');

    Route::resource('link', 'LinkController', ['except' => ['create', 'show']]);
    Route::post('/link/{id}/status', 'LinkController@status');

    Route::get('visitor', 'VisitorController@index');

    Route::get('upload', 'UploadController@index');
    Route::post('upload', 'UploadController@uploadForManager');
    Route::post('folder', 'UploadController@createFolder');
    Route::post('folder/delete', 'UploadController@deleteFolder');
    Route::post('file/delete', 'UploadController@deleteFile');

    Route::get('system', 'SystemController@getSystemInfo');
});

Route::group([
    'namespace' => 'Api',
], function () {

    Route::get('test','VisitorController@index');
    Route::post('user/address', 'AddressController@store')->middleware('auth:api');

    Route::post('chat/upload', 'ChatController@store')->middleware('auth:api');

    Route::post('ad', 'AdController@store')->middleware('auth:api');

    Route::get('ad/{id}', 'AdController@edit')->middleware('auth:api');

    Route::post('order', 'OrderController@store')->middleware('auth:api');


    Route::post('finance/withdraw','FinanceController@withdraw')->middleware('auth:api');


    Route::group(['prefix' => 'chat'], function () {
        Route::post('message/send',  'ChatController@send')->middleware('auth:api');
        Route::post('message/history',  'ChatController@history')->middleware('auth:api');


    });

    // File Upload
    Route::post('file/upload', 'UploadController@fileUpload')->middleware('auth:api');
    // Edit Avatar
    Route::post('crop/avatar', 'UserController@cropAvatar')->middleware('auth:api');

    // Comment
    Route::get('commentable/{commentableId}/comment', 'CommentController@show')->middleware('api');
    Route::post('comments', 'CommentController@store')->middleware('auth:api');
    Route::delete('comments/{id}', 'CommentController@destroy')->middleware('auth:api');
    Route::post('comments/vote/{type}', 'MeController@postVoteComment')->middleware('auth:api');
    Route::get('tags', 'TagController@getList');
});
