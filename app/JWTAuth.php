<?php
/**
 * User: surprisepeas
 * Date: 2017/6/29 12:27
 */

namespace App;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth as BaseJWTAuth;
use Tymon\JWTAuth\JWTManager;
use Tymon\JWTAuth\Providers\Auth\AuthInterface;
use Tymon\JWTAuth\Providers\User\UserInterface;

class JWTAuth extends BaseJWTAuth
{
	/**
	 * JWTAuth constructor.
	 * @param JWTManager    $manager
	 * @param UserInterface $user
	 * @param AuthInterface $auth
	 * @param Request       $request
	 */
	public function __construct(JWTManager $manager, UserInterface $user, AuthInterface $auth, Request $request)
	{
		return parent::__construct($manager, $user, $auth, $request);
	}
	
	/**
	 * @param string $method
	 * @param string $header
	 * @param string $query
	 * @return BaseJWTAuth
	 */
	public function parseToken($method = 'bearer', $header = 'authorization', $query = 'jwt-token')
	{
		return parent::parseToken($method, $header, $query);
	}
}