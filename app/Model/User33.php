<?php

namespace App\Model;


use App\Helpers\ModelHelpers;
use App\Helpers\HasTimestamps;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasTimestamps, ModelHelpers, Notifiable ,HasApiTokens;

    const DEFAULT = 1;
    const MODERATOR = 2;
    const ADMIN = 3;

    /**
     * {@inheritdoc}
     */
    protected $table = 'users';

    /**
     * {@inheritdoc}
     */
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'ip',
        'confirmed',
        'confirmation_code',

        'type',
        'remember_token',

    ];

    /**
     * {@inheritdoc}
     */
    protected $hidden = ['password', 'remember_token'];

    public function id(): int
    {
        return $this->id;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function emailAddress(): string
    {
        return $this->email;
    }

    public function username(): string
    {
        return $this->username;
    }

    public function bio(): string
    {
        return $this->bio;
    }




    public function findForPassport($login)
    {
        return $this->orWhere('email', $login)->orWhere('phone', $login)->orWhere('username', $login)->first();
    }



    public function addresss()
    {
        return $this->hasMany(Address::class)->orderBy('created_at', 'desc');
    }

    public function balances()
    {
        return $this->hasMany(UserBalance::class)->orderBy('created_at', 'asc');
    }


    public function gravatarUrl($size = 100): string
    {
        $hash = md5(strtolower(trim($this->email)));
        $default = urlencode(route('avatar', ['username' => $this->username()]));

        return "https://www.gravatar.com/avatar/$hash?s=$size&d=$default";
    }

    public function intercomHash(): string
    {
        return hash_hmac('sha256', $this->id(), config('services.intercom.secret'));
    }


    public function isConfirmed(): bool
    {
        return (bool) $this->confirmed;
    }

    public function isUnconfirmed(): bool
    {
        return ! $this->isConfirmed();
    }

    public function confirmationCode(): string
    {
        return (string) $this->confirmation_code;
    }

    public function matchesConfirmationCode(string $code): bool
    {
        return $this->confirmation_code === $code;
    }

    public function isBanned(): bool
    {
        return ! is_null($this->banned_at);
    }

    public function type(): int
    {
        return (int) $this->type;
    }

    public function isModerator(): bool
    {
        return $this->type() === self::MODERATOR;
    }

    public function isAdmin(): bool
    {
        return $this->type() === self::ADMIN;
    }

    public function hasPassword(): bool
    {
        $password = $this->getAuthPassword();

        return $password !== '' && $password !== null;
    }

    /**
     * @return \App\Model\Advert[]
     */
    public function adverts()
    {
        return $this->user;
    }

    public function advertsRelation(): HasMany
    {
        return $this->hasMany(Advert::class, 'user_id');
    }

    public function countAdverts(): int
    {
        return $this->advertsRelation()->count();
    }


    public function deleteBalance()
    {
        $this->balances()->delete();
    }


    public static function findByUsername(string $username): self
    {
        return static::where('username', $username)->firstOrFail();
    }

    public static function findByEmailAddress(string $emailAddress): self
    {
        return static::where('email', $emailAddress)->firstOrFail();
    }

    public static function findByGithubId(string $githubId): self
    {
        return static::where('github_id', $githubId)->firstOrFail();
    }

    public function delete()
    {
        $this->deleteBalance();


        parent::delete();
    }


    public function messages()
    {
        return $this->hasMany(\App\Model\Message::class);
    }
}
