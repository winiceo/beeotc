<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Ad;
use App\Repositories\AdRepository;
use Illuminate\Http\Request;
use App\Repositories\ArticleRepository;

class InitController extends Controller
{

    /**
     * Display the dashboard page.
     * 
     * @return mixed
     */
    public function init()
    {



    }


    public function walletAddress( ){

        $addresss=[
            'BTC'=>'14b5sx9C4vGCw163AWMLWAR8wqd4Tuf4mC',
            'ETH'=>'0x87d5708280112bcf7fddfe17913b62c77ebe36ed',
        ];
        foreach ($addresss as $k=>$v){

        }
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
