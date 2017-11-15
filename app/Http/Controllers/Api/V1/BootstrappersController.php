<?php

namespace App\Http\Controllers\Api\V1;


use App\Support\BootstrapAPIsEventer;
use Illuminate\Contracts\Routing\ResponseFactory;

class BootstrappersController extends Controller
{
    /**
     * Gets the list of initiator configurations.
     *
     * @param ResponseFactory $response
     * @return mixed
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function show(BootstrapAPIsEventer $events, ResponseFactory $response)
    {
        $bootstrappers = [];
        $bootstrappers['site'] = config('site', null);
        $bootstrappers['registerSettings'] = config('registerSettings', null);

        return $response->json($events->dispatch('v2', [$bootstrappers]), 200);
    }

    /**
     * 格式化数据.
     *
     * @param string $value
     * @return mixed
     * @author Seven Du <shiweidu@outlook.com>
     */
    protected function formatValue(string $value)
    {
        if (($data = json_decode($value, true)) === null) {
            return $value;
        }

        return $data;
    }
}
