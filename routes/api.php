<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1 as API1;
use Illuminate\Contracts\Routing\Registrar as RouteContract;

//Route::any('/develop', \Zhiyi\Plus\Http\Controllers\DevelopController::class.'@index');

/*
|--------------------------------------------------------------------------
| RESTful API version 2.
|--------------------------------------------------------------------------
|
| Define the version of the interface that conforms to most of the
| REST ful specification.
|
*/




Route::group(['prefix' => 'v1','namespace' => 'Api\V1'], function (RouteContract $api) {

    /*
    |-----------------------------------------------------------------------
    | No user authentication required.
    |-----------------------------------------------------------------------
    |
    | Here are some public routes, public routes do not require user
    | authentication, and if it is an optional authentication route to
    | obtain the current authentication user, use `$request-> user ('api')`.
    |
    */

    /*
    | 应用启动配置.
    */

    $api->get('/bootstrappers', 'BootstrappersController@show');

    //用户登录
    Route::post('/account/login', 'AccountController@login');

    //Route::post('/login/refresh', 'LoginController@refresh');

    Route::post('/account/logout', 'AccountController@logout');

//    Route::post('login', 'AuthController@login');
//    Route::post('me', 'AuthenticateController@login');
//    Route::post('logout', 'AuthController@logout');
    // Route::delete('me', 'AuthController@logout');


    Route::get('account/test', 'AccountController@test');

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/', function () {

        });
        //账户信息
        Route::get('account/info', 'AccountController@info');



        //获取所有正在进行的委托
        Route::get('orders', 'OrdersController@index');

        //获取委托详情
        Route::get('order/info', 'OrdersController@info');

        //买入
        Route::get('order/buy', 'OrdersController@buy');

        //卖出
        Route::get('order/sell', 'OrdersController@sell');

        //取消
        Route::get('order/cancel', 'OrdersController@cancel');


        //卖出(市价单)
        Route::get('market/sell', 'MarketController@sell');

        //买入(市价单)
        Route::get('market/buy', 'MarketController@buy');


        /**
         * 查询个人最新10条成交订单
         */
        Route::get('orders/deal/new', 'MarketController@buy');

        /**
         * 根据trade_id查询oder_id
         */
        Route::get('orders/trade/new', 'MarketController@buy');



    });
//
//
//    /*
//    |-----------------------------------------------------------------------
//    | 用户验证验证码
//    |-----------------------------------------------------------------------
//    |
//    | 定义与用户操作相关的验证码操作
//    |
//    */
//
//    $api->group(['prefix' => 'verifycodes'], function (RouteContract $api) {
//
//        /*
//        | 注册验证码
//        */
//
//        $api->post('/register', API1\VerifyCodeController::class.'@storeByRegister');
//
//        /*
//        | 已存在用户验证码
//        */
//
//        $api->post('/', API1\VerifyCodeController::class.'@store');
//    });
//
//
//    /*
//    | 获取文件.
//    */
//
//    tap($api->get('/files/{fileWith}', API1\FilesController::class.'@show'), function ($route) {
//        $route->setAction(array_merge($route->getAction(), [
//            'middleware' => 'bindings',
//        ]));
//    });
//
//    /*
//    |-----------------------------------------------------------------------
//    | 与公开用户相关
//    |-----------------------------------------------------------------------
//    |
//    | 定于公开用户的相关信息路由
//    |
//    */
//
//    /*
//    | 找人
//    */
//    $api->group(['prefix' => 'user'], function (RouteContract $api) {
//        // @get find users by phone
//        $api->post('/find-by-phone', API1\FindUserController::class.'@findByPhone');
//
//        // @get popular users
//        $api->get('/populars', API1\FindUserController::class.'@populars');
//
//        // @get latest users
//        $api->get('/latests', API1\FindUserController::class.'@latests');
//
//        // @get recommended users
//        $api->get('/recommends', API1\FindUserController::class.'@recommends');
//
//        // @get search name
//        $api->get('/search', API1\FindUserController::class.'@search');
//
//        // @get find users by user tags
//        $api->get('/find-by-tags', API1\FindUserController::class.'@findByTags');
//    });
//
//    $api->group(['prefix' => 'users'], function (RouteContract $api) {
//
//        /*
//        | 创建用户
//        */
//
//        $api->post('/', API1\UserController::class.'@store')
//            ->middleware('sensitive:name');
//
//        /*
//        | 批量获取用户
//        */
//
//        $api->get('/', API1\UserController::class.'@index');
//
//        /*
//        | 获取单个用户资源
//         */
//
//        $api->get('/{user}', API1\UserController::class.'@show');
//
//        /*
//        | 用户头像
//         */
//
//        tap($api->get('/{user}/avatar', API1\UserAvatarController::class.'@show'), function ($route) {
//            $route->setAction(array_merge($route->getAction(), [
//                'middleware' => 'bindings',
//            ]));
//        });
//
//        // 获取用户关注者
//        $api->get('/{user}/followers', API1\UserFollowController::class.'@followers');
//
//        // 获取用户关注的用户
//        $api->get('/{user}/followings', API1\UserFollowController::class.'@followings');
//
//        // Get the user's tags.
//        // @GET /api/v2/users/:user/tags
//        $api->get('/{user}/tags', API1\TagUserController::class.'@userTgas');
//    });
//
//    // Retrieve user password.
//    $api->put('/user/retrieve-password', API1\ResetPasswordController::class.'@retrieve');
//
//    /*
//    |-----------------------------------------------------------------------
//    | Define a route that requires user authentication.
//    |-----------------------------------------------------------------------
//    |
//    | The routes defined here are routes that require the user to
//    | authenticate to access.
//    |
//    */
//
//    $api->group(['middleware' => 'auth:api'], function (RouteContract $api) {
//
//        /*
//        |--------------------------------------------------------------------
//        | Define the current authentication user to operate the route.
//        |--------------------------------------------------------------------
//        |
//        | Define the routes associated with the current authenticated user,
//        | such as getting your current user, updating user data, and so on.
//        |
//        */
//
//        $api->group(['prefix' => 'user'], function (RouteContract $api) {
//
//            /*
//            | 获取当前用户
//            */
//
//            $api->get('/', API1\CurrentUserController::class.'@show');
//
//            // Update the authenticated user
//            $api->patch('/', API1\CurrentUserController::class.'@update');
//
//            // Update phone or email of the authenticated user.
//            $api->put('/', API1\CurrentUserController::class.'@updatePhoneOrMail');
//
//            // 查看用户未读消息统计
//            $api->get('/unread-count', API1\UserUnreadCountController::class.'@index');
//
//            /*
//            | 用户收到的评论
//            */
//
//            $api->get('/comments', API1\UserCommentController::class.'@index');
//
//            /*
//            | 用户收到的赞
//             */
//
//            $api->get('/likes', API1\UserLikeController::class.'@index');
//
//            // User certification.
//            $api->group(['prefix' => 'certification'], function (RouteContract $api) {
//
//                // Send certification.
//                $api->post('/', API1\UserCertificationController::class.'@store');
//
//                // Update certification.
//                $api->patch('/', API1\UserCertificationController::class.'@update');
//
//                // Get user certification.
//                $api->get('/', API1\UserCertificationController::class.'@show');
//            });
//
//            /*
//            | 用户通知相关
//             */
//
//            $api->group(['prefix' => 'notifications'], function (RouteContract $api) {
//
//                /*
//                | 用户通知列表
//                 */
//
//                $api->get('/', API1\UserNotificationController::class.'@index');
//
//                /*
//                | 通知详情
//                 */
//
//                $api->get('/{notification}', API1\UserNotificationController::class.'@show');
//
//                /*
//                | 阅读通知，可以使用资源模型阅读单条，也可以使用资源组形式，阅读标注多条.
//                 */
//
//                $api->patch('/{notification?}', API1\UserNotificationController::class.'@markAsRead');
//
//                /*
//                    标记所有未读消息为已读
//                 */
//                $api->put('/all', API1\UserNotificationController::class.'@markAllAsRead');
//            });
//
//            // send a feedback.
//            $api->post('/feedback', API1\SystemController::class.'@createFeedback');
//
//            // get a list of system conversation.
//            $api->get('/conversations', API1\SystemController::class.'@getConversations');
//
//            /*
//            | 更新当前用户头像
//             */
//
//            $api->post('/avatar', API1\UserAvatarController::class.'@update');
//
//            // Update background image of the authenticated user.
//            $api->post('/bg', API1\CurrentUserController::class.'@uploadBgImage');
//
//            /*
//            | 用户关注
//             */
//
//            $api->group(['prefix' => 'followings'], function (RouteContract $api) {
//
//                // 我关注的人列表
//                $api->get('/', API1\CurrentUserController::class.'@followings');
//
//                // 关注一个用户
//                $api->put('/{target}', API1\CurrentUserController::class.'@attachFollowingUser');
//
//                // 取消关注一个用户
//                $api->delete('/{target}', API1\CurrentUserController::class.'@detachFollowingUser');
//            });
//
//            $api->group(['prefix' => 'followers'], function (RouteContract $api) {
//
//                // 获取关注我的用户
//                $api->get('/', API1\CurrentUserController::class.'@followers');
//            });
//
//            // Reset password.
//            $api->put('/password', API1\ResetPasswordController::class.'@reset');
//
//            // The tags route of the authenticated user.
//            // @Route /api/v2/user/tags
//            $api->group(['prefix' => 'tags'], function (RouteContract $api) {
//
//                // Get all tags of the authenticated user.
//                // @GET /api/v2/user/tags
//                $api->get('/', API1\TagUserController::class.'@index');
//
//                // Attach a tag for the authenticated user.
//                // @PUT /api/v2/user/tags/:tag
//                $api->put('/{tag}', API1\TagUserController::class.'@store');
//
//                // Detach a tag for the authenticated user.
//                // @DELETE /api/v2/user/tags/:tag
//                $api->delete('/{tag}', API1\TagUserController::class.'@destroy');
//            });
//
//            // 打赏用户
//            $api->post('/{target}/rewards', API1\UserRewardController::class.'@store');
//
//            /*
//             * 解除手机号码绑定.
//             *
//             * @DELETE /api/v2/user/phone
//             * @author Seven Du <shiweidu@outlook.com>
//             */
//            $api->delete('/phone', API1\UserPhoneController::class.'@delete');
//
//            /*
//             * 解除用户邮箱绑定.
//             *
//             * @DELETE /api/v2/user/email
//             * @author Seven Du <shiweidu@outlook.com>
//             */
//            $api->delete('/email', API1\UserEmailController::class.'@delete');
//        });
//
//        /*
//        |--------------------------------------------------------------------
//        | Wallet routing.
//        |--------------------------------------------------------------------
//        |
//        | Defines routes related to wallet operations.
//        |
//        */
//
//        $api->group(['prefix' => 'wallet'], function (RouteContract $api) {
//
//            /*
//            | 获取钱包配置信息
//             */
//
//            $api->get('/', API1\WalletConfigController::class.'@show');
//
//            /*
//            | 获取提现记录
//             */
//            $api->get('/cashes', API1\WalletCashController::class.'@show');
//
//            /*
//            | 发起提现申请
//             */
//
//            $api->post('/cashes', API1\WalletCashController::class.'@store');
//
//            /*
//            | 充值钱包余额
//             */
//
//            $api->post('/recharge', API1\WalletRechargeController::class.'@store');
//
//            /*
//            | 获取凭据列表
//             */
//
//            $api->get('/charges', API1\WalletChargeController::class.'@list');
//
//            /*
//            | 获取单条凭据
//             */
//
//            $api->get('/charges/{charge}', API1\WalletChargeController::class.'@show');
//        });
//
//        /*
//        | 检查一个文件的 md5, 如果存在着创建一个 file with id.
//         */
//
//        $api->get('/files/uploaded/{hash}', API1\FilesController::class.'@uploaded');
//
//        /*
//        | 上传一个文件
//         */
//
//        $api->post('/files', API1\FilesController::class.'@store');
//
//        /*
//        | 显示一个付费节点
//         */
//
//        $api->get('/purchases/{node}', API1\PurchaseController::class.'@show');
//
//        /*
//        | 为一个付费节点支付
//         */
//
//        $api->post('/purchases/{node}', API1\PurchaseController::class.'@pay');
//    });
});
