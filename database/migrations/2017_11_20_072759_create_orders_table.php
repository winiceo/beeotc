<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order_code')->comment('订单编号');

            $table->integer('ad_id')->unsigned()->comment('广告ID');
            $table->string('ad_code')->comment('广告编号');

            $table->integer('ad_user_id')->unsigned()->comment('广告用户ID');

            $table->integer('user_id')->unsigned()->comment('用户ID');

            $table->decimal('ad_price', 10)->default(0)->comment('广告单价价');

            $table->decimal('amount', 10)->default(0)->comment('交易金额');
            $table->decimal('qty', 10)->default(0)->comment('交易数量');

            $table->integer('payterm')->default(30)->comment('交易数量');

            $table->dateTime('finish_time')->nullable()->comment('交易结束时间');

            $table
                ->tinyInteger('status')
                ->unsigned()
                ->nullable()
                ->default(0)
                ->comment('状态：0 - 待审批，1 - 已审批，2 - 被拒绝');

            $table->text('order_desc')->comment('交易描述');
            $table->text('buyer_estimate')->comment('买方评价');
            $table->text('seller_estimate')->comment('卖方评价');

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
        Schema::dropIfExists('orders');
    }
}
