<?php

namespace App\Policies;

use App\Model\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user is admin for all authorization.
     */
    public function before(User $user)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }

    /**
     * Determine whether the user can update the user.
     *
     * @param  \ App\Model\User  $user
     * @param  \ App\Model\User  $user
     * @return boolean
     */
    public function update(User $current_user, User $user): bool
    {
        return $current_user->id === $user->id;
    }

    /**
     * Determine whether the user can generate a personnal access token.
     *
     * @param  \ App\Model\User $current_user
     * @param  \ App\Model\User $user
     * @return bool
     */
    public function api_token(User $current_user, User $user): bool
    {
        return $current_user->id === $user->id;
    }
}
