<?php
/**
 * Created by PhpStorm.
 * User: genv
 * Date: 2017/12/18
 * Time: 下午9:23
 */

require __DIR__.'/../vendor/autoload.php';

$http = new GuzzleHttp\Client;
//
//$response = $http->post('http://localhost:2222/oauth/token', [
//    'form_params' => [
//        'grant_type' => 'password',
//        'client_id' => '5',
//        'client_secret' => 'QrBjNXcHC1ZKF4QP2W7jH8fz4ZMgGRgotbEX61jC',
//        'username' => "admin",
//        'password' => "123456",
//        'scope' => '',
//    ],
//]);
//
//  dump($response->getBody() );

define('ADD', 1); // 增加权限
define('UPD', 2); // 修改权限
define('SEL', 4); // 查找权限
define('DEL', 8); // 删除权限

// 给予某种权限用到“位或”运算符
$a_access = ADD | UPD | SEL | DEL; // a拥有增删改查权限
$b_access = ADD | UPD | SEL; // b拥有增改查权限
$c_access = ADD | UPD; // c拥有增改权限

// 禁止某种权限用“位与”和“位非”运算符
$d_access = $c_access & ~UPD; // d只拥有了增权限

// 检测是否拥有某种权限用到“位与”运算符
var_dump($b_access & ADD); // 1代表b拥有增权限
var_dump($a_access  ); // 0代表b不拥有删权限
