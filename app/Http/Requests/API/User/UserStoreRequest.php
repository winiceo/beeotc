<?php
/**
 * User: surprisepeas
 * Date: 2017/7/31 17:28
 */

namespace App\Http\Requests\API\User;


use App\Http\Requests\API\Request;

/**
 * Class UserStoreRequest
 * @package app\Http\Requests\API\User
 *
 * @property string name
 * @property string email
 * @property string password
 */
class UserStoreRequest extends Request
{
    public function rules()
    {
        return [
            'email'    => 'required|email|unique:users',
            'name'     => 'required',
            'password' => 'required',
        ];
    }

    public function authorize()
    {
        return auth()->user()->is_admin;
    }
}