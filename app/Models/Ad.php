<?php

namespace App\Models;

use App\Scopes\StatusScope;
use DB;
use App\Helpers\HasSlug;
use App\Helpers\HasTags;
use App\Helpers\HasAuthor;
use App\Helpers\ModelHelpers;
use App\Helpers\HasTimestamps;
use App\Helpers\ReceivesReplies;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Contracts\Pagination\Paginator;
use App\Exceptions\CouldNotMarkReplyAsSolution;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ad extends Model
{
    use HasAuthor, HasSlug, HasTimestamps, ModelHelpers, ReceivesReplies, HasTags;

    const TABLE = 'ads';

    /**
     * {@inheritdoc}
     */
    protected $table = self::TABLE;


    protected $fillable = [
        'user_id',
        'crypto_currency',
        'trade_type',
        'country_code',
        'margin',
        'status'
    ];



    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::addGlobalScope(new StatusScope());
    }

    /**
     * Get the user for the discussion.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * {@inheritdoc}
     */
    //protected $fillable = ['subject', 'body', 'ip', 'slug'];

    public function id(): int
    {
        return $this->id;
    }



    public function delete()
    {
//        $this->removeTags();
//        $this->deleteReplies();

        parent::delete();
    }

    /**
     * @return \App\Models\Thread[]
     */
    public static function feed(int $limit = 20): Collection
    {
        return static::feedQuery()->limit($limit)->get();
    }

    /**
     * @return \App\Models\Thread[]
     */
    public static function feedPaginated(int $perPage = 20): Paginator
    {
        return static::feedQuery()->paginate($perPage);
    }


    /**
     * This will order the threads by creation date and latest reply.
     */
    public static function feedQuery(): Builder
    {
//        return static::leftJoin('replies', function ($join) {
//            $join->on('threads.id', 'replies.replyable_id')
//                    ->where('replies.replyable_type', static::TABLE);
//        })
//            ->orderBy('latest_creation', 'DESC')
//            ->groupBy('threads.id')
//            ->select('threads.*', DB::raw('
//                CASE WHEN COALESCE(MAX(replies.created_at), 0) > threads.created_at
//                THEN COALESCE(MAX(replies.created_at), 0)
//                ELSE threads.created_at
//                END AS latest_creation
//            '));
        return static::orderBy('created_at', 'DESC')

            ->select('ads.*');


    }
}
