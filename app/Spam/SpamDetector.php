<?php

namespace App\Spam;

use  App\Model\User;

interface SpamDetector
{
    public function detectsSpam($value, User $user = null): bool;
}
