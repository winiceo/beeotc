<?php

namespace App\Http\Controllers\Api;

use function App\Helpers\username;
use App\Models\Menu;
use App\User;
use Illuminate\Http\Request;

use Illuminate\Contracts\Routing\ResponseFactory as ResponseFactoryContract;
use Illuminate\Support\Facades\Hash;

class TokenController extends ApiController
{



    private $user;

    function index(Request $request, Auth $auth, $token = null) {
        $user = $auth->user();
        $res = [
            'user_info' => [],
            'org_info' => [],
            'menu' => [
                'top' => Menu::buildMenuTop($user),
                'map' => Menu::buildMenuMap($user),
                'uri_tops' => Menu::UriTops(),
                'uris' => Menu::Uris()
            ]
        ];
        if ($token) {
            $res['auth_token'] = $token;
        } else {
            $token = $request->get('auth-token');
            //Logi::login($user->id, $token, true);
            $res['auth_token'] = $token;
        }
        return response()->ok('登录成功', $res);
    }

    function store1(Request $request, Auth $auth) {
        $this->validate($request, [
            'name' => 'required',
            'password' => 'required'
        ], [
            'name.required' => '账号不能为空',
            'password.required' => '密码不能为空',
        ]);
        $name = $request->name;
        if ($user = User::where('account', $name)->first()) {
            if (!Hash::check($request->password, $user->password)) {
                throw new ErrorCodeException(211);
            }
            $this->user = $user;
            $token = $auth->login($user);
            return $this->index($request, $auth, $token);
        }
        throw new ErrorCodeException(210);
    }
    /**
     * Create a user token.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Contracts\Routing\ResponseFactory $response
     * @param \Zhiyi\Plus\Auth\JWTAuthToken $jwtAuthToken
     * @return mixed
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function store(Request $request, ResponseFactoryContract $response, User $model)
    {
        $login = $request->input('login', '');
        $password = $request->input('password', '');
        $user = $model->where(username($login), $login)->first();


        if (!$user) {
            return $response->json(['login' => ['用户不存在']], 404);
        } elseif (!$user->verifyPassword($password)) {
            return $response->json(['password' => ['密码错误']], 422);
        }
//        elseif ($user->roles->whereStrict('id', 3)->isNotEmpty()) { // 禁止登录用户
//            return $response->json(['message' => ['你已被禁止登陆']], 422);
//        }

        $token = $user->createToken('Token Name')->accessToken;

        return response()->json([
            'errMsg' => 'asdf',
            'errCode'=>0,
            'data' => [
                'user_info' => $user,
                'auth_token' => $token,
                'org_info'=>[],
                'menu' => [
                    'top' => Menu::buildMenuTop($user),
                    'map' => Menu::buildMenuMap($user),
                    'uri_tops' => Menu::UriTops(),
                    'uris' => Menu::Uris()
                ]
            ],
            'menu' => [
                'top' => Menu::buildMenuTop($user),
                'map' => Menu::buildMenuMap($user),
                'uri_tops' => Menu::UriTops(),
                'uris' => Menu::Uris()
            ]

        ]);

        //response()->ok();
        // $response->json()->setStatusCode(201);

//        elseif (($token = $jwtAuthToken->create($user))) {
//            return $response->json([
//                'token' => $token,
//                'user' => array_merge($user->toArray(), [
//                    'phone'  => $user->phone,
//                    'email'  => $user->email,
//                    'wallet' => $user->wallet,
//                ]),
//                'ttl' => config('jwt.ttl'),
//                'refresh_ttl' => config('jwt.refresh_ttl'),
//            ])->setStatusCode(201);
//        }

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
        if (!$jwtAuthToken->refresh($token)) {
            return $response->json(['message' => ['Failed to refresh token.']], 500);
        }

        return $response->json([
            'token' => $token,
            'ttl' => config('jwt.ttl'),
            'refresh_ttl' => config('jwt.refresh_ttl'),
        ])->setStatusCode(201);
    }
}
