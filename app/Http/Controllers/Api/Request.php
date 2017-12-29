<?php

namespace App\Http\Controllers\Api\Requests;

use App\Helpers\SendsAlerts;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

 class Request extends FormRequest
{
    use SendsAlerts;

    public function authorize()
    {
        // Allow all requests and handle authorization in controllers.
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
        $this->error('errors.fields');

        parent::failedValidation($validator);
    }

    protected function getParam($key,$default=null)
    {

        parent::get($key,$default=null);
    }
}
