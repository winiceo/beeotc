<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Http\Requests;
use App\Queries\SearchAds;
use App\Repositories\AdRepository;
use Illuminate\Http\Request;
use App\Repositories\ArticleRepository;

class TradeController extends Controller
{
    protected $ad;

    public function __construct(AdRepository $ad)
    {
        $this->ad = $ad;
    }
    public function index()
    {
        $ads = $this->ad->with('User')->page(config('trade.ad.number'), config('trade.ad.sort'), config('trade.ad.sortColumn'));




        return view('trade.index', compact('ads'));
    }

    /**
     * Display the articles resource.
     * 
     * @return mixed
     */
    public function overview()
    {
        $ads = $this->ad->page(config('trade.ad.number'), config('trade.ad.sort'), config('trade.ad.sortColumn'));


        return view('trade.index', compact('ads'));
    }



    public function buy(Requests\AdRequest $request,$coin){

      //  dump($request);


       // $search = request('search');//$search ? SearchAds::get($search) :
        $ads =  Ad::feedPaginated();
        //dump($ads);

        return view('trade.buy', compact('ads'));

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
