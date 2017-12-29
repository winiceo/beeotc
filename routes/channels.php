<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/


//Broadcast::channel('App.User.{id}', function ($user, $id) {
//    return (int) $user->id === (int) $id;
//});
Broadcast::channel('chat', function ($user) {
    return true;
    return Auth::check();
});


Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('post.{postId}', function ($user, $postId) {
    return true;
});

//
//Broadcast::channel('order', function ( ) {
//
//
//    return true;
//    //return ((int)$user->id === (int)\App\Model\Order::findOrNew($orderId)->user_id)||((int)$user->id === (int)\App\Model\Order::findOrNew($orderId)->ad_user_id);
//});
