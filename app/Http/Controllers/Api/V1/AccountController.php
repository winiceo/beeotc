<?php
/**
 * User: surprisepeas
 * Date: 2017/7/31 17:26
 */

namespace App\Http\Controllers\API\V1;


use App\Http\Requests\LoginRequest;
use App\User;
use function App\username;
use Hash;
use Illuminate\Support\Facades\Auth;



use Illuminate\Contracts\Routing\ResponseFactory as ResponseFactoryContract;


class AccountController extends Controller
{



    public function info(){


        //Auth::user();
        $data=Auth::user();
        return response()->json($data);
    }

    public function test(){

        return $this->message('请求成功');
    }



    public function login(LoginRequest $request,ResponseFactoryContract $response,   User $model)
    {




        $email = $request->input('email', '');
        $password = $request->input('password', '');
        $user = $model->where(username($email), $email)->with('wallet')->first();

        if (! $user) {
            return $response->json(['login' => ['用户不存在']], 404);
        } elseif (! $user->verifyPassword($password)) {
            return $response->json(['password' => ['密码错误']], 422);
        }
//        elseif ($user->roles->whereStrict('id', 3)->isNotEmpty()) { // 禁止登录用户
//            return $response->json(['message' => ['你已被禁止登陆']], 422);
//        }

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
//
//        return $response->json(['message' => ['Failed to create token.']])->setStatusCode(500);
//
//

        $token = $user->createToken($email)->accessToken;


            return $response->json([
                'token' => $token,
                'user' => array_merge($user->toArray(), [
                    'phone'  => $user->phone,
                    'email'  => $user->email,
                    'wallet' => $user->wallet,
                ])
            ])->setStatusCode(201);


        return $response->json(['message' => ['Failed to create token.']])->setStatusCode(500);
 
    }
}