<?php

namespace App\Http\Controllers\Api\V2;



use App\Helpers\CoinHelpers;
use App\Http\Requests\AdRequest;
use App\Http\Requests\AdvertRequest;
 use App\Http\Requests\ThreadRequest;
use App\Jobs\CreateAdvert;
use App\Jobs\SendEmailConfirmation;
use App\Service\AdvertService;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AdvertController extends ApiController
{




    public function overview(Request $request,Response $response)
    {
        $adverts = AdvertService::search($request,20);
        return $this->success($adverts);
    }

    public function show(Request $request,Response $response,$id)
    {
        $advert = AdvertService::get($id);

        return $this->success($advert);
    }


    public function getByUser(Request $request,Response $response){


        $adverts= AdvertService::getByUser($request,Auth::user());
        $coins=CoinHelpers::getIds();
        foreach ($adverts as $k=>$v){
            $adverts[$k]->coin_name=$coins[$v->coin_type]['name'];
        }

        return  $this->success($adverts);

    }


    public function store(AdRequest  $request ){


        $this->dispatchNow(new SendEmailConfirmation(Auth::user()));

        $thread = $this->dispatch(CreateAdvert::fromRequest($request));

        return $this->success([$thread]);

       // return redirect()->route('thread', $thread->slug());


    }






}
