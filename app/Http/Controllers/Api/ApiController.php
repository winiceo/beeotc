<?php

namespace App\Http\Controllers\Api;

use App\Support\Response;
use App\Support\Transform;
use App\Traits\ApiResponse;
use League\Fractal\Manager;
use App\Http\Controllers\Controller;


use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class ApiController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests,  ApiResponse
;

    protected $response;

    /**
     * ApiController constructor.
     */
    public function __construct()
    {
        $manager = new Manager();

        $this->response = new Response(response(), new Transform($manager));
    }
}
