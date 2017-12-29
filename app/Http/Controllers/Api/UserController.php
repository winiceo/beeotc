<?php

namespace App\Http\Controllers\Api;
 use App\Model\User;
use App\Service\UserService;
use App\Service\UserWalletService;
  use Illuminate\Foundation\Auth\RegistersUsers;
 use Illuminate\Http\Request;
 use Illuminate\Http\Response;
 use Illuminate\Support\Facades\Validator;


 class UserController extends ApiController
{

     public function jwtGenerator(User $user, $credentials)
    {
        $token = [
            "iss" => "http://pf.local",
            "iat" => time(),
            "nbf" => time(),
            'exp' => strtotime("+12 month"),
            "data" => [
                'id' => $user->id,
                'credentials'=>$credentials
            ],
        ];

        $jwt = JWT::encode($token, $this->container->get('secret-key'));

        return $jwt;
    }



    public function login(Request $request, Response $response)
    {

        if ($request->isPost()) {
            $credentials = [
                'username' => $request->getParam('username'),
                'password' => $request->getParam('password')
            ];
            $remember = $request->getParam('remember') ? true : false;

            try {
                if ($this->auth->authenticate($credentials, $remember)) {
                    $this->flash('success', 'You are now logged in.');
                    $data=[
                        "user"=>$this->auth->getUser(),
                        "token"=>$this->jwtGenerator($this->auth->getUser(),$credentials)
                    ];

                    return $this->json($response,$data);


                    //return $this->redirect($response, 'home');
                } else {
                    $this->error( '用户名或密码错误');
                }
            } catch (ThrottlingException $e) {
                $this->error('频率受限');
            }
        }
        return $this->fail($response);


    }



    public function register(Request $request, Response $response)
    {



        dump($request->all());
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required|unique:posts|min:6|max:255',

        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            echo $errors->first('email');

        }



        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);


        dump($user);
        exit;

//        return $this->registered($request, $user)
//            ?: redirect($this->redirectPath());




        if ($request->isPost()) {
            $username = $request->getParam('username');
            $email = $request->getParam('email');
            $password = $request->getParam('password');


            $violations=$this->inputCheck($request);

            if (0 !== count($violations)) {
                $this->error($violations[0]->getMessage());
            }


            if ($this->auth->findByCredentials(['login' => $username])) {
                $this->error('此用户名已存在');
            }

            if ($this->auth->findByCredentials(['login' => $email])) {
                $this->error('此邮箱已存在');
            }

            if ($this->validator->isValid()) {
                $role = $this->auth->findRoleByName('User');

                $user = $this->auth->registerAndActivate([
                    'username' => $username,
                    'email' => $email,
                    'password' => $password,
                    'permissions' => [
                        'user.delete' => 0
                    ]
                ]);
                UserService::checkWallet($user);



                $role->users()->attach($user);

                $this->flash('success', 'Your account has been created.');

                $data=[
                    "user"=>$user,
                    "token"=>$this->jwtGenerator($user,$this->container->get('secret-key'))
                ];

                return $this->json($response,$data);


            }
        }

        return $this->fail($response);
    }

    public function logout(Request $request, Response $response)
    {
        $this->auth->logout();

        return $this->redirect($response, 'home');
    }


    public function profile(Request $request, Response $response){
        $user=$this->auth->getUser();
        return $this->json($response,$user);
    }





}
