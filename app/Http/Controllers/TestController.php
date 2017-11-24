<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Test;
use App\Repositories\AdRepository;
use Illuminate\Http\Request;
use App\Repositories\ArticleRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Jrean\UserVerification\Facades\UserVerification;
use TCG\Voyager\Models\MenuItem;

class TestController extends Controller
{
    protected $article;

    public function __construct(ArticleRepository $article)
    {
        $this->article = $article;
    }


    public function mail(){

        $user=Auth::user();

        UserVerification::generate($user);

        dump($user);

        UserVerification::send($user, 'My Custom E-mail Subject','zshdiy@163.com','zshdiy');

    }



    public function test(Test $ad){

        $ams = DB::select('select * from admin_menus ');

        foreach($ams as $am){
            $am->menu_id=2;
            $am=(array)$am;
            $am['icon_class']=$am['icon'];
            $am['url']=$am['uri'];
            if($am['parent_id']>0) {
                $am['parent_id'] = $am['parent_id'] + 13;
            }
             unset($am['icon']);
             unset($am['uri']);
             unset($am['tree']);
             unset($am['id']);

            $menu=new MenuItem();

            $menu->create($am);
         //MenuItem::save($am);

        }

    }


}
