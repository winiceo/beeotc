<?php

namespace App\Http\Requests;

use  App\Model\User;
use App\Validation\SpamRule;
use App\Validation\DoesNotContainUrlRule;

class AdRequest extends Request
{
    public function rules()
    {
        return [
            'coin_type' => 'required|digits_between:1,10' ,
            'trade_type' => 'required|numeric',
            'price' => 'required|numeric',

        ];
    }

    public function author(): User
    {
        return $this->user();
    }

}
