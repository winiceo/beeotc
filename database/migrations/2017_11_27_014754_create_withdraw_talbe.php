<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWithdrawTalbe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdraw', function (Blueprint $table) {
            $table->increments('id');
            $table->string('coin_type')->comment('提币币种');

            $table->string('address')->comment('提币地址');

            $table->decimal('amount',10,10)->unsigned()->comment('提币数量');
            $table->string('order_code')->comment('订单编号');

            $table->dateTime('finish_time')->nullable()->comment('交易结束时间');

            $table
                ->tinyInteger('status')
                ->unsigned()
                ->nullable()
                ->default(0)
                ->comment('状态：0 - 处理中，1 - 已审批，2 - 已完成');


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
