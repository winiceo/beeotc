<?php

namespace App\Models\Relations;

use App\Models\WalletCash;

trait UserHasWalletCash
{
    /**
     * Wallet cshs.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function walletCashes()
    {
        return $this->hasMany(WalletCash::class, 'user_id', 'id');
    }
}
