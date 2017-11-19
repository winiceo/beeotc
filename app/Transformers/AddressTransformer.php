<?php

namespace App\Transformers;

 use App\Models\Ad;
 use App\Models\Address;
use App\Scopes\StatusScope;
use League\Fractal\TransformerAbstract;

class AddressTransformer extends TransformerAbstract
{
    protected $availableIncludes = [ 'user' ];

    public function transform(Address $address)
    {
        $content = json_decode($address->content);

        return [
            'id'            => $address->id,
            'user_id'       => $address->user_id,
            'wallet_name'       => $address->wallet_name,
            'wallet_address'       => $address->wallet_address,
            'username'      => isset($address->user) ? $address->user->name : 'Null',
            'avatar'        => isset($address->user) ? $address->user->avatar : config('blog.default_avatar'),


            'created_at'    => $address->created_at->diffForHumans()

        ];
    }

    /**
     * Include User
     *
     * @param Comment $address
     * @return \League\Fractal\Resource\Collection
     */
    public function includeUser(Address $address)
    {
        $user = $address->user;

        return $this->item($user, new UserTransformer);
    }

}
