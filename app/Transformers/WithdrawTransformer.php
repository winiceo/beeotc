<?php

namespace App\Transformers;

 use App\Models\Ad;
 use App\Models\Address;
 use App\Models\Withdraw;
 use App\Scopes\StatusScope;
use League\Fractal\TransformerAbstract;

class WithdrawTransformer extends TransformerAbstract
{
    protected $availableIncludes = [ 'user' ];

    public function transform(Withdraw $withdraw)
    {
        $content = json_decode($withdraw->content);

        return [
            'id'            => $withdraw->id,
            'user_id'       => $withdraw->user_id,
            'address'       => $withdraw->address,
            'amount'       => $withdraw->amount,
            'username'      => isset($withdraw->user) ? $withdraw->user->name : 'Null',
            'avatar'        => isset($withdraw->user) ? $withdraw->user->avatar : config('blog.default_avatar'),


            //'created_at'    => $withdraw->created_at->diffForHumans()

        ];
    }

    /**
     * Include User
     *
     * @param Comment $withdraw
     * @return \League\Fractal\Resource\Collection
     */
    public function includeUser(Withdraw $withdraw)
    {
        $user = $withdraw->user;

        return $this->item($user, new UserTransformer);
    }

}
