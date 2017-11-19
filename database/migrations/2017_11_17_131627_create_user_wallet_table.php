<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserWalletTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('user_wallet', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('user_id')->comment('创建者uid');

            $table->string('coin_type',10)->comment('币种');
            $table->string('wallet_name', 50)->comment('钱包名称');
            $table->string('wallet_address')->nullable()->comment('钱包地址');
            $table->timestamps();
            $table->tinyInteger("status")->default(0)->comment('状态');
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
        Schema::dropIfExists('user_wallet');
    }
}
