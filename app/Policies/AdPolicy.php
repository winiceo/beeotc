<?php

namespace App\Policies;

use App\Models\Ad;
use App\User;
use App\Discussion;
use Illuminate\Auth\Access\HandlesAuthorization;

class AdPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the discussion.
     *
     * @param  \App\User  $user
     * @param  \App\Discussion  $discussion
     * @return mixed
     */
    public function update(User $user, Ad $ad)
    {


        return   $user->id === $ad->user_id;
    }

    /**
     * @param User $user
     * @param Discussion $discussion
     * @return mixed
     */
    public function delete(User $user, Discussion $discussion)
    {
        return $user->is_admin;
    }
}
