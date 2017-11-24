<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Jrean\UserVerification\Facades\UserVerification;
use Jrean\UserVerification\Traits\VerifiesUsers;
 use Validator;
use Identicon\Identicon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    use VerifiesUsers;


    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/emails/verfication';



    // 验证失败后的跳转地址
    //public $redirectIfVerificationFails = '/emails/verification-result/failure';
    // 检测到用户已经验证过后的跳转地址
   /// public $redirectIfVerified = '/emails/verification-result/success';
    // 验证成功后的跳转地址
    //public $redirectAfterVerification = '/';


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest',['except' => ['getVerification', 'getVerificationError']]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|min:3|max:16|unique:users|regex:/^[0-9a-zA-Z-_]+$/u',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => bcrypt($data['password']),
            'status'   => 0,
            'avatar'   => (new Identicon())->getImageDataUri($data['name'], 256),
        ]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();


        $user = $this->create($request->all());

        $this->guard()->login($user);

        UserVerification::generate($user);

        UserVerification::send($user, 'My Custom E-mail Subject','zshdiy@163.com','asdfsdf');

        return redirect()->to($this->redirectTo);
    }


    public function verificationSuccess(){
        $message='邮箱已验证通过';
        return view('mail.success', compact('message'));
    }


    public function verificationFailure(){
        $message='验证失败';
        return view('mail.failure', compact('message'));
    }


    public function verification(){

        $user=Auth::user();

        return view('mail.verification', compact('user'));

    }
}
