<?php

namespace App\Jobs;

use App\Http\Requests\AdRequest;
use App\Http\Requests\AdvertRequest;
use App\Model\Advert;

use App\Model\User;
use Illuminate\Support\Facades\Auth;


class CreateAdvert
{
    /**
     * @var string
     */
    private $subject;

    /**
     * @var string
     */
    private $body;

    /**
     * @var string
     */
    private $ip;

    /**
     * @var \App\Model\User
     */
    private $user;

    /**
     * @var array
     */
    private $params;

    public function __construct(User $user ,$params )
    {

        $this->user=$user;
        $this->params=$params;
    }

    public static function fromRequest(AdRequest $request): self
    {
        return new static(
            Auth::user(),
            $request->all()
        );
    }

    public function handle(): Advert
    {
        $thread = new Advert($this->params);
        $thread->userBy($this->user);

        $thread->save();

        return $thread;
    }
}
