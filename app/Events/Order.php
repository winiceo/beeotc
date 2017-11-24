<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Order implements ShouldBroadcast
{
    use InteractsWithSockets, SerializesModels;

    public $type;
    public $content;
    public $time;
    public $order_id;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($order_id,$type, $content, $time)
    {
        $this->order_id=$order_id;
        $this->type = $type;
        $this->content = $content;
        $this->time = $time;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        \Log::log('debug', 'Message::broadcastOn - chat-channel - '.json_encode($this));

        return new PrivateChannel('order'.$this->order_id);
    }
}
