<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\ServerError;
use App\Support\Response;
use App\Support\Transform;
use App\Traits\ApiResponse;
use League\Fractal\Manager;
use App\Http\Controllers\Controller;


use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


use Illuminate\Http\Request;
use Zend\Diactoros\Server;


class ApiController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests,  ApiResponse
;

    protected $response;
    protected $code = 200;
    protected $msg = '';
    protected $data = [];
    /**
     * ApiController constructor.
     */
    public function __construct()
    {
        $manager = new Manager();

        $this->response = new Response(response(), new Transform($manager));
    }

    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    public function setMsg($msg)
    {
        $this->msg = $msg;

        return $this;
    }

    public function setData($data)
    {
        $this->data = $data;

        return $this;
    }

    public function notFound()
    {
        return $this->setCode(ServerError::HTTP_NOT_FOUND)
            ->toJson();
    }

    public function created($msg = '创建成功', array $data = [])
    {
        return $this->setCode(Response::HTTP_CREATED)
            ->setMsg($msg)
            ->setData($data)
            ->toJson();
    }

    public function authFail()
    {
        return $this->setCode(401)
            ->toJson();
    }

    public function toJson()
    {
        return response()->json($this->formatResponse());
    }

    public function formatResponse()
    {
        return [
            'code' => $this->code,
            'msg' => ServerError::getErrorMsg($this->code) ?? $this->msg,
            'data' => $this->data
        ];
    }


}
