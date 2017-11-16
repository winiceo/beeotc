<?php
/**
 * User: surprisepeas
 * Date: 2017/7/31 17:26
 */

namespace App\Http\Controllers\API\V1;


use App\Application;
use App\Http\Requests\API\User\UserStoreRequest;
use App\Models\User;
use Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    protected $auth;

    /**
     * Create a new user
     * @param UserStoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserStoreRequest $request)
    {
        return response()->json(User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]));
    }

    public function test( ){
        //dump(Auth::check());
        dump(Auth::user());

//        $user = $this->auth->user();
//        dump($user);
        //$token = Auth::generateTokenById(1);
        return [333];
    }
}