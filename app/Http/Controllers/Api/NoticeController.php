<?php

namespace App\Http\Controllers\Api;

use function App\Helpers\username;
use App\Models\Menu;
use App\User;
use Illuminate\Http\Request;

use Illuminate\Contracts\Routing\ResponseFactory as ResponseFactoryContract;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class NoticeController extends ApiController
{



    private $user;

    function index(Request $request, Auth $auth, $token = null) {

        return response()->ok('登录成功');
    }


}
