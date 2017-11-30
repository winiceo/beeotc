<template>
    <div class="chat">
        <section class="chatlist" v-scroll-bottom="messages" :class="showSelBox>0?'chatlist-bottom-collapse':'chatlist-bottom'">
                 <ul>
                    <template v-for="item in messages">
                        <li class="chat-mine" v-if="item.self">
                            <div class="chat-user"><img :src="item.avatar"></div>
                            <div class="time"><cite><timeago :since="item.time" locale="zh-CN"></timeago></cite></div>
                            <div class="chat-text" v-html="(item.content)"></div>
                        </li>
                        <li v-if="!item.self">
                            <div class="chat-user"><img :src="item.avatar"></div>
                            <div class="time"><cite><timeago :since="item.time" locale="zh-CN"></timeago></cite></div>
                            <div class="chat-text" v-html="(item.content)"></div>
                        </li>
                    </template>
                </ul>
         </section>


        <section class="foot">
               <el-input placeholder="请输入内容" @keyup.native='onKeyup'    v-model="content" class="input-with-select">
               <el-upload slot="prepend" 
                  class="avatar-uploader"
                  action=""
                  :show-file-list="false"
                  :on-success="uploadSuccess"
                   :before-upload="beforeUpload">
                  
                  <i  class="el-icon-picture"></i>
                </el-upload>
 
                <el-button slot="append" type="success"  v-on:click="sendMessage">发送</el-button>
              </el-input>
             
           
             
        </section>


    </div>
</template>
 
<script>

    const now = new Date();
 
  
    export default {
        data() {
            return {
                showSelBox:0,
                im_token: App.im_token,
                order_im_token: App.order_im_token,
                messages: [],
                instance: null,
                content: '',
                order: App.order,
                callbacks:{},
                imageUri:null,
            }
        },
        filters: {
            // 将日期过滤为 hour:minutes
            time(date) {
                return 33;
                // if (typeof date === 'string') {
                //     date = new Date(date);
                // }
                // return date.getHours() + ':' + date.getMinutes();
            }
        },
        directives: {
            // 发送消息后滚动到底部
            'scroll-bottom' (el, bindings, vnode) {
                
   // vnode.context is the scope where the directive is rendered.
                const vm = vnode.context
                 vm.$nextTick(() => {
                    el.scrollTop =  el.scrollHeight -  el.clientHeight;
                });
            }
        },
        created() {
            var _vm = this;
            this.callbacks = {

                getHistory: function () {
                    _vm.$http.post('/chat/message/history', {order_id: App.order.id})
                        .then((response) => {

                            var messages = response.data.data.data.data.reverse();
                             
                            messages.forEach(function (message) {
                                _vm.callbacks.receiveNewMessage(JSON.parse(message.message));
                            })
                            //toastr.success('You publish the comment success!')
                        }).catch(({response}) => {
                        //this.isSubmiting = false
                        //stack_error(response)
                    })

                },
                receiveNewMessage: function (message) {
                //console.log(message)
                //alert([message.content.extra.order_id,_vm.order.id])
                // var chatcontent = "";
                if (message.content.extra.order_id != _vm.order.id) {
                    return false;
                }
                var item = {}

                if (message.senderUserId == _vm.im_token.userId) {
                    item.self = true
                    item.avatar = _vm.im_token.avatar;

                } else {
                    item.self = false
                    item.avatar = _vm.order_im_token.avatar;
                }
                item.time = message.sentTime;
                console.log(message)
                if (message.messageType == "ImageMessage") {
                    item.content = "<img src="+message.content.imageUri+" class='msgimg'>"


                } else if (message.messageType == "TextMessage") {
                    item.content = message.content.content

                }
                 
                _vm.messages.push(item)

            },

                getInstance: function (ist) {
                    _vm.instance = ist;

                    return ist
                }
            }
            

            BeeChat.init(this.callbacks)
            this.callbacks.getHistory();

        },
        methods: {
            
            uploadSuccess(file) {

                this.selfForm.shareImg=file
            },
            beforeUpload(file) {
                var vm=this;
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
               const formData = new FormData();

              

              formData.append('upchatpic',file);
              formData.append('orderid',this.order.id);

                this.$http.post('/chat/upload',formData).then(json => {
                    var data=json.data
                    if(data.code==0){
                        vm.imageUri=data.file;
                        vm.sendMessage();
                    }
                })
                return false;
            },
            onKeyup(e) {
                if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                    this.sendMessage();
                    this.content = '';
                }
            },
            sendMessage() {
                var _vm = this;
                var content = {
                    content: this.content,
                    extra: {
                        "order_id": App.order.id
                    }
                };

                var conversationtype = RongIMLib.ConversationType.PRIVATE; // 私聊
                var msg = new RongIMLib.TextMessage(content);
                if(this.imageUri){
                    content.imageUri=this.imageUri;
                    msg=new RongIMLib.ImageMessage(content); 
                }

                this.instance.sendMessage(conversationtype, this.order_im_token.userId, msg, {
                    onSuccess: function (message) {
                        _vm.callbacks.receiveNewMessage(message)
                        //callbacks.receiveNewMessage(message)
                        _vm.content = '';

                        _vm.$http.post('/chat/message/send', message)
                            .then(function (res) {

                            })
                            .catch(function (err) {
                                console.log(err);
                            });


                    },
                    onError: function (errorCode, message) {
                        console.log("发送文字消息失败");
                        console.log(errorCode);
                    }
                });

            }
        }
    }

</script>