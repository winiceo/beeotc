<?php

namespace App\Http\Controllers;

use App\Helpers\CoinHelpers;
use App\Model\Advert;
use App\Http\Requests;
use App\Queries\SearchAdvert;
use App\Queries\SearchTrade;
use App\Repositories\AdvertRepository;
use Illuminate\Http\Request;
use App\Repositories\ArticleRepository;

class TradeController extends Controller
{
    protected $advert;

    public function __construct(AdvertRepository $advert)
    {
        $this->advert = $advert;
    }


    /**
     * Display the articles resource.
     *
     * @return mixed
     */
    public function overview(Request $request)
    {
        // $adverts = $this->advert->page(config('tradverte.advert.number'), config('tradverte.advert.sort'), config('tradverte.advert.sortColumn'));
        $adverts = SearchTrade::get($request);

        $coins = CoinHelpers::getIds();

        foreach ($adverts as $k => $v) {
            $adverts[$k]["coin_name"] = $coins[$v['coin_type']]["name"];
        }

        leven($request->all());

        return view('trade.index', compact('adverts'));
    }


    public function buy(Request $request, $coin)
    {


        $adverts = Advert::feedPaginated();

       // dump($adverts);

        return view('trade.index', compact('adverts'));

    }
    public function sell(Request $request, $coin)
    {


        $adverts = Advert::feedPaginated();

       // dump($adverts);

        return view('trade.index', compact('adverts'));

    }


    /**
     * Display the article resource by article slug.
     *
     * @param  string $slug
     * @return mixed
     */
    public function show($slug)
    {
        $article = $this->article->getBySlug($slug);

//        $article->content = collect(json_decode($article->content))->get('html');

        return view('article.show', compact('article'));
    }
}
