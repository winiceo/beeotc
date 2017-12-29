<?php

namespace App\Jobs;

use  App\Model\User;
use Illuminate\Contracts\Hashing\Hasher;

class UpdatePassword
{
    /**
     * @var \ App\Model\User
     */
    private $user;

    /**
     * @var string
     */
    private $newPassword;

    public function __construct(User $user, string $newPassword)
    {
        $this->user = $user;
        $this->newPassword = $newPassword;
    }

    public function handle(Hasher $hasher)
    {
        $this->user->update(['password' => $hasher->make($this->newPassword)]);
    }
}
