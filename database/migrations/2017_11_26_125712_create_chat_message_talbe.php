<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChatMessageTalbe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_messages', function (Blueprint $table) {
            $table->increments('id');
            $table->text('content')->comment('聊天内容');
            $table->string('chatpic')->nullable()->comment('聊天图片');

            $table->integer('ordertype')->unsigned()->comment('订单类型');
            $table->integer('orderid')->unsigned()->comment('订单id');

            $table->integer('from_user_id')->unsigned()->comment('发消息用户id');
            $table->integer('to_user_id')->unsigned()->comment('收消息用户id');

            $table->dateTime('finish_time')->nullable()->comment('交易结束时间');

            $table
                ->tinyInteger('status')
                ->unsigned()
                ->nullable()
                ->default(0)
                ->comment('状态：0 - 待审批，1 - 已审批，2 - 被拒绝');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
