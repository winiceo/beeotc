<?php

namespace App\Http\Controllers\Api\V1;

use App\User;
use Illuminate\Http\Request;
use function App\username;
use App\Auth\JWTAuthToken;
use Illuminate\Contracts\Routing\ResponseFactory as ResponseFactoryContract;

class TokenController extends Controller
{
    /**
     * Create a user token.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Contracts\Routing\ResponseFactory $response
     * @param \App\Auth\JWTAuthToken $jwtAuthToken
     * @return mixed
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function store(Request $request, ResponseFactoryContract $response, JWTAuthToken $jwtAuthToken, User $model)
    {
//        $login = $request->input('email', '');
//        $password = $request->input('password', '');

        $credentials = $request->only('email', 'password');

        $user = $model->where(username($credentials['email']), $credentials['email'])->with('wallet')->first();




        if (! $user) {
            return $response->json(['login' => ['用户不存在']], 404);
        } elseif (! $user->verifyPassword($credentials['password'])) {
            return $response->json(['password' => ['密码错误']], 422);
        }
//        elseif ($user->roles->whereStrict('id', 3)->isNotEmpty()) { // 禁止登录用户
//            return $response->json(['message' => ['你已被禁止登陆']], 422);
//        }
        elseif (($token = $jwtAuthToken->create( $user))) {

            return $response->json([
                'token' => $token,
                'user' => array_merge($user->toArray(), [
                    'phone'  => $user->phone,
                    'email'  => $user->email,
                    'wallet' => $user->wallet,
                ]),
                'ttl' => config('jwt.ttl'),
                'refresh_ttl' => config('jwt.refresh_ttl'),
            ])->setStatusCode(201);
        }

        return $response->json(['message' => ['Failed to create token.']])->setStatusCode(500);
    }

    /**
     * Refresh a user token.
     *
     * @param \Illuminate\Contracts\Routing\ResponseFactory $response
     * @param \Tymon\JWTAuth\JWTAuth $auth
     * @param string $token
     * @return mixed
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function refresh(ResponseFactoryContract $response, JWTAuthToken $jwtAuthToken, string $token)
    {



        if (! $jwtAuthToken->refresh($token)) {
            return $response->json(['message' => ['Failed to refresh token.']], 500);
        }

        return $response->json([
            'token' => $token,
            'ttl' => config('jwt.ttl'),
            'refresh_ttl' => config('jwt.refresh_ttl'),
        ])->setStatusCode(201);
    }
}
