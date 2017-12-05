<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Models\UserBalance;
use App\Repositories\VisitorRepository;
use App\Service\OrderService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

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



         OrderService::check_order();
    }

}
