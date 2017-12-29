<?php

namespace App\Jobs;

use  App\Model\User;

class DeleteUser
{
    /**
     * @var \ App\Model\User
     */
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function handle()
    {
        $this->user->delete();
    }
}
