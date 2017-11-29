<?php

namespace App\Http\Controllers;

use function App\Helpers\bee_config;
use App\Helpers\CoinHelpers;
use App\Http\Requests\AdRequest;

use App\Repositories\AdRepository;
use App\Repositories\DiscussionRepository;
use App\Repositories\TagRepository;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\View;

class AdController extends Controller
{

    use CoinHelpers;

    protected $ad;

    public function __construct(AdRepository $ad, TagRepository $tag)
    {
        $this->middleware('auth')->except(['index', 'show']);

        $this->ad=$ad;
        $coins=CoinHelpers::get();


        View::share('coins', $coins);


    }


    public function create()
    {

       $price=Redis::command('hget', ['prices', 'btccny']);
       $price=\GuzzleHttp\json_decode($price);

        leven('price',$price->sell);


        return view('ad.create', compact('coins'));
    }


    public function store(AdRequest $request)
    {
        $data = array_merge($request->all(), [
            'user_id'      => \Auth::id(),

            'status'       => 0
        ]);

        dump($data);





        $this->ad->store($data);
        exit;

        return redirect()->to('discussion');
    }


    public function detail($id)
    {
        $ad = $this->ad->getById($id);



        return view('ad.detail', compact('ad'));
    }


    public function edit($id)
    {
        $ad = $this->ad->getById($id);

        $this->authorize('update', $ad);


        return view('ad.edit', compact('ad'));
    }




    public function update(DiscussionRequest $request, $id)
    {
        $discussion = $this->discussion->getById($id);

        $this->authorize('update', $discussion);

        $data = array_merge($request->all(), [
            'last_user_id' => \Auth::id()
        ]);

        $this->discussion->update($id, $data);

        return redirect()->to("discussion/{$id}");
    }
}
