<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->increments('id')->comment('广告ID');
            $table->integer('user_id')->unsigned()->comment('用户ID');
            $table->string('crypto_currency', 10)->comment('数字货币:BTC');
            $table->string('trade_type', 10)->comment('广告类型ONLINE_BUY为卖出ONLINE_SELL为买入');
            $table->string('country_code',10)->comment('所在国家编号');
            $table->decimal('margin', 4, 2)->default(0)->comment('溢价');
            $table->decimal('price', 10)->default(0)->comment('价格');
            $table->decimal('min_price', 10)->default(0)->comment('最低价格');
            $table->integer('min_amount')->default(0)->comment('最小限额');
            $table->integer('max_amount')->default(0)->comment('最大限额');
            $table->integer('payment_window_minutes')->default(0)->comment('付款期限');
            $table->string('payment_provider')->nullable()->comment('付款方式');
            $table->text('message', 65535)->nullable()->comment('广告留言');
            $table->boolean('require_identification')->default(0)->comment('是否启用安全选项');
            $table->boolean('require_trusted_by_advertiser')->default(0)->comment('仅限受信任的交易者');
            $table->integer('opening_hours_0_0')->default(-1);
            $table->integer('opening_hours_0_1')->default(-1);
            $table->integer('opening_hours_1_0')->default(-1);
            $table->integer('opening_hours_1_1')->default(-1);
            $table->integer('opening_hours_2_0')->default(-1);
            $table->integer('opening_hours_2_1')->default(-1);
            $table->integer('opening_hours_3_0')->default(-1);
            $table->integer('opening_hours_3_1')->default(-1);
            $table->integer('opening_hours_4_0')->default(-1);
            $table->integer('opening_hours_4_1')->default(-1);
            $table->integer('opening_hours_5_0')->default(-1);
            $table->integer('opening_hours_5_1')->default(-1);
            $table->integer('opening_hours_6_0')->default(-1);
            $table->integer('opening_hours_6_1')->default(-1);
            $table->integer('view_count')->unsigned()->default(0)->index()->comment('浏览次数');
            $table->unsignedTinyInteger('status')->default(0)->comment('状态');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ads');
    }
}
