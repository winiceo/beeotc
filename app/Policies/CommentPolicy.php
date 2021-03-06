<?php

namespace App\Policies;

use App\Model\Comment;
use App\Model\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
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
     * Determine whether the user can delete the comment.
     *
     * @param  \ App\Model\User  $user
     * @param  \App\Comment  $comment
     * @return boolean
     */
    public function delete(User $user, Comment $comment): bool
    {
        return $user->id === $comment->author_id;
    }
}
