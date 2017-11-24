<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->from('NoReplay@clownfish.com')
            ->subject('注册成功')//设置邮件主题
            ->view('mail.confirmRegister')//使用Laravel的blade模板
            ->with(['user' => $this->arr]);//向模板传值


       //return $this->view('view.name');
    }
}
