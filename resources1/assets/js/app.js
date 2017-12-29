/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('chat-messages', require('./components/ChatMessages.vue'));
Vue.component('chat-form', require('./components/ChatForm.vue'));



//     .listen('.order.created', function (e) {
//
//         console.log(e)
//         this.messages.push({
//             message: e.message.message,
//             user: e.user
//         });
//     })
//
//     .listen('.order.created', function (e) {
//         console.log(e)
//         this.messages.push({
//             message: e.message.message,
//             user: e.user
//         });
//     })
// }) .listen('.order.cancel', function (e) {
//     console.log(e)
//     this.messages.push({
//         message: e.message.message,
//         user: e.user
//     });




const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },

    created(){
        this.fetchMessages();

        window.Echo.channel('chat')
            .listen('MessageSent', (e) => {

                console.log(e)
                this.messages.push({
                    message: e,
                    user: "adfasdf"
                });
            });
    },

    methods: {
        fetchMessages() {
            axios.get(`/messages/${order_id}`).then((response) => {
                this.messages = response.data;
             })

        },

        addMessage(message) {
            this.messages.push(message);

            axios.post(`/messages/${order_id}`, message).then(response => {
                //console.log(response.data);
        })

        }
    }
});
