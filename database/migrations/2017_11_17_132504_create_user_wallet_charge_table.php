<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserWalletChargeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_wallet_charge', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('user_id')->comment('创建者uid');

            $table->tinyInteger('coin_type')->comment('币种');
            $table->decimal('block_balance', 10,10)->comment('锁定金额');
            $table->decimal('can_balance', 10,10)->comment('可用金额');
            $table->decimal('total_balance', 10,10)->comment('总资产');



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_wallet_charge');
    }
}
