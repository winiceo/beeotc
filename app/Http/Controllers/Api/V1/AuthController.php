<?php
/**
 * User: surprisepeas
 * Date: 2017/6/28 18:05
 */

namespace App\Http\Controllers\API\V1;

use App\Http\Requests\API\UserLoginRequest;
use Tymon\JWTAuth\Exceptions\JWTException;
use Exception;
use JWTAuth;
use Log;

class AuthController extends Controller
{
    public function login(UserLoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }


    public function logout()
    {
        if ($token = JWTAuth::getToken()) {
            try {
                JWTAuth::invalidate($token);
            } catch (Exception $e) {
                Log::error($e);
            }
        }

        return response()->json();
    }

}