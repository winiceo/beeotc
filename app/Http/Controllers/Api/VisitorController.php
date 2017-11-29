<?php

namespace App\Http\Controllers\Api;

use App\Repositories\VisitorRepository;

class VisitorController extends ApiController
{
    protected $visitor;

    public function __construct(VisitorRepository $visitor)
    {
        parent::__construct();

        $this->visitor = $visitor;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $token=3333;
        return $this->setMsg('登录成功')->setData(compact('token'))->toJson();

    }

}
