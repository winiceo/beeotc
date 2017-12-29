<?php

namespace App\Policies;

use App\Model\User;
 
class AdvertPolicy
{
    const CREATE = 'create';
    const UPDATE = 'update';
    const DELETE = 'delete';

    /**
     * Determine if replies can be created by the user.
     */
    public function create(User $user): bool
    {
        // We only need to be logged in.
        return true;
    }

    /**
     * Determine if the given advert can be updated by the user.
     */
    public function update(User $user, Advert $advert): bool
    {
        return $advert->isAuthoredBy($user) || $user->isModerator() || $user->isAdmin();
    }

    /**
     * Determine if the given advert can be deleted by the user.
     */
    public function delete(User $user, advert $advert): bool
    {
        return $advert->isAuthoredBy($user) || $user->isModerator() || $user->isAdmin();
    }
}
