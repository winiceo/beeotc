<?php
/**
 * Created by PhpStorm.
 * User: genv
 * Date: 2017/12/18
 * Time: 下午8:32
 */

namespace App\Http\Controllers\Api\V2;


use App\Model\User;
use Faker\Provider\DateTime;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use League\Flysystem\Exception;
use Parse\ParseUser;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use App\Mail\TestEmail;



use Parse\ParseClient;
use Parse\ParseObject;
use Parse\ParseException;
class TestController extends ApiController
{
    /**
     * 获取登录TOKEN
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile(Request $request)
    {



//        ParseClient::initialize('beenetwork','beenetwork', 'e79dd55af42ae0916961');
//        ParseClient::setServerURL(env('PARSE_SERVER_URL'),env('PARSE_SERVER_MOUNT'));
//        $health = ParseClient::getServerHealth();
//
//
//        dump($health);
//        exit;
//        if($health['status'] === 200) {
//            // everything looks good!
//        }



        $user = new ParseUser();
        $user->set("username", "shen");
        $user->set("password", "123456");
        $user->set("email", "email1331@example.com");
 // other fields can be set just like with ParseObject
        $user->set("phone", "415-392-0202");

        try {
            $user->signUp();
            $user->logOut();

            dump($user);
            // Hooray! Let them use the app now.
        } catch (ParseException $ex) {
            // Show the error message somewhere and let the user try again.
            echo "Error: " . $ex->getCode() . " " . $ex->getMessage();
        }

        exit;
        $object = ParseObject::create("TestObject");

        $object->set("elephant", "php");

        try {
            $object->save();
           dump ($object->_encode());
        } catch (ParseException $ex) {

            dump($ex);
            // Execute any logic that should take place if the save fails.
            // error is a ParseException object with an error code and message.
            //throw new Exception('Failed to create new object, with error message: ' + $ex->getMessage());
        }

        echo 333;
//        $data = ['message' => 'This is a test!'];
//
//        Mail::to('john@example.com')->send(new TestEmail($data));
    }
}