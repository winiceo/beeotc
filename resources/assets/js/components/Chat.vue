

<template>
    <div class="mainchat">
        <ul class="list-group chatlist">
            <li class="list-group-item" v-for="message in messages">@{{ message.type+" "+message.content }} <span
                    class="float-right">@{{ message.time }}</span></li>
        </ul>
        <div class="container-fluid message">
            <div class="Chat col-md-12">
                <form v-on:submit.prevent="send" class="Chat--focused input-group">
                    <input v-model="message" type="text" class="form-control Chat__textArea"
                           placeholder="Send your message!">
                    <span class="input-group-btn">
                    <button class="btn btn-secondary Chat__submitButton" type="submit">Send</button>
                </span>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .list-group.chatlist {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        padding-bottom: 60px;
        overflow: scroll;
    }

    .container-fluid.message {
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0px;
        padding: 10px;
        background: antiquewhite;
    }

    .float-right {
        float: right;
    }
</style>


<script>

    import io from 'socket.io-client/dist/socket.io'
    var socket_port = 3000;
    var socket_host = 'http://192.168.10.10';
    var socket_channel = 'private-chat-channel';

    var socket = io(socket_host + ":" + socket_port);



    export default {

        data() {
           return {
               message: '',
               messages: []
           }
        },
        mounted: function () {
            this.$nextTick(function () {
                console.log("Setting socket on " + socket_host + ":" + socket_port + " with channel " + socket_channel + "...");

                socket.on(socket_channel, function (event) {
                    console.log(event);

                    this.messages.push(event);

                    // Scroll down on DOM Update after Push
                    this.$nextTick(function () {
                        var container = this.$el.querySelector(".chatlist");
                        console.log("scrollToBottom", container.scrollTop, container.clientHeight, container.scrollHeight);
                        container.scrollTop = container.scrollHeight;
                    });
                }.bind(this));
            });
        },
        methods: {
            send: function (event) {
                var message_obj = {
                    type: "UserMessage",
                    content: this.message,
                    time: '',
                    _token: ''
                };
                this.$http.post('/chat/send_message', message_obj).then(function (response) {
                    console.log("socket.on.send_message", response);
                })
                ;
                // Emit commented to send messages via Laravel
                // socket.emit(socket_channel, message_obj);
                this.message = '';
            }
        }
    }

</script>