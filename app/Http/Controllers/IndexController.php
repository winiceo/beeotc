<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Ad;
use App\Repositories\AdRepository;
use Illuminate\Http\Request;
use App\Repositories\ArticleRepository;

class IndexController extends Controller
{
    protected $article;

    public function __construct(ArticleRepository $article)
    {
        $this->article = $article;
    }

    /**
     * Display the dashboard page.
     * 
     * @return mixed
     */
    public function index()
    {


        return view('index.index');
    }


    public function test(AdRepository $ad){


        for($i=0;$i<20;$i++){
            $data = array_merge([], [
                'user_id'      => \Auth::id(),
                'margin'=>33.44,
                'crypto_currency'=>'BTC',
                'trade_type'=>'ONLINE_BUY',
                'country_code'=>'ONLINE_BUY',
                'status'       => 0
            ]);

            dump($data);





            $ad->store($data);
        }

        exit;
    }


}
