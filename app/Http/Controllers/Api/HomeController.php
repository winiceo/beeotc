<?php

namespace App\Http\Controllers\Api;

use App\Repositories\UserRepository;
use App\Repositories\VisitorRepository;
use App\Repositories\ArticleRepository;
use App\Repositories\CommentRepository;

class HomeController extends ApiController
{
    protected $user;
    protected $visitor;
    protected $article;
    protected $comment;

    public function __construct(
        UserRepository $user,
        VisitorRepository $visitor,
        ArticleRepository $article,
        CommentRepository $comment)
    {
        parent::__construct();

        $this->user = $user;
        $this->visitor = $visitor;
        $this->article = $article;
        $this->comment = $comment;
    }

    public function statistics()
    {
        $users = $this->user->getNumber();
        $visitors = (int) $this->visitor->getAllClicks();
        $articles = $this->article->getNumber();
        $comments = $this->comment->getNumber();

        $data = compact('users', 'visitors', 'articles', 'comments');

        return $this->response->json($data);
    }


    public function setting(){

        $data=
            [

                "logo_home"=> "//cdn.chojer.com/setting/chojer_logo.png",
              "logo_console"=> "//cdn.chojer.com/setting/chojer_logo_white.png",

              "site_copy_right"=> "Copyright© 2015-2017 chojer All Rights Reserved.",
              "site_icp"=> "蜀ICP备15025439号-2",

              "home_ads"=> [
                "//cdn.chojer.com/setting/carousel_1.png",
                "//cdn.chojer.com/setting/carousel_2.jpeg",
                "//cdn.chojer.com/setting/carousel_3.jpeg",
                "//cdn.chojer.com/setting/carousel_4.jpeg"
            ]

            ];
        return $this->response->json($data);
    }

}
