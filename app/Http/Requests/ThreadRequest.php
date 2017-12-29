<?php

namespace App\Http\Requests;

use  App\Model\User;
use App\Validation\SpamRule;
use App\Validation\DoesNotContainUrlRule;

class ThreadRequest extends Request
{
    public function rules()
    {
        return [

            'coin_type' => 'required',

        ];
    }

    public function author(): User
    {
        return $this->user();
    }

    public function subject(): string
    {
        return $this->get('subject');
    }

    public function body(): string
    {
        return $this->get('body');
    }

    public function tags(): array
    {
        return $this->get('tags', []);
    }
}
