<?php
/**
 * Created by PhpStorm.
 * User: genv
 * Date: 2017/12/18
 * Time: 下午6:31
 */

namespace App\Http\Controllers\Api;

 use App\Api\Helpers\ApiResponse;
 use App\Http\Controllers\Controller;
 use Illuminate\Support\Facades\Auth;

 class ApiController extends Controller
{

    use ApiResponse;


    // 其他通用的Api帮助函数

    public function __construct()
    {

    }

}

