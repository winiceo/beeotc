<template>

<el-form ref="form" :model="form" label-width="80px">
   
    <el-form-item label="交易币种">
        <el-select v-model="form.crypto_currency" placeholder="交易币种">
            
            <el-option v-for='(coin, index) in coin_type'
              :key="coin.value"
              :label="coin.label"
              :value="coin.value"
              ></el-option>

        </el-select>
    </el-form-item>

       <el-form-item label="交易类型">
        <el-radio-group v-model="form.trade_type">
            <el-radio label="0">在线出售比特币</el-radio>
            <el-radio label="1">在线购买比特币</el-radio>
        </el-radio-group>
    </el-form-item>

     <el-form-item label="所在国家">
        <el-select v-model="form.country_code" placeholder="所在国家">
            <el-option label="中国" value="btc"></el-option>

        </el-select>
    </el-form-item>

    <el-form-item label="货币">
        <el-select v-model="form.currency" placeholder="货币">
            <el-option label="人民币" value="CNY"></el-option>

        </el-select>
        您希望交易付款的货币类型。
    </el-form-item>

     <el-form-item label="溢价">
        <el-input v-model="form.margin"></el-input>
    </el-form-item>

    <el-form-item label="价格">
        <el-input v-model="form.price"></el-input>
    </el-form-item>

    <el-form-item label="最低价">
        <el-input v-model="form.min_price"></el-input>
    </el-form-item>


    <el-form-item label="最小限额">
        <el-input v-model="form.min_amount"></el-input>
    </el-form-item>

      <el-form-item label="最大限额">
        <el-input v-model="form.max_amount"></el-input>
    </el-form-item>

    <el-form-item label="付款期限">
        <el-input v-model="form.payment_window_minutes"></el-input>
    </el-form-item>


     <el-form-item label="收款方式">
        <el-select v-model="form.payment_provider" placeholder="收款方式">
            <el-option label="支付宝" value="CNY"></el-option>
            <el-option label="微信" value="CNY"></el-option>

        </el-select>
    </el-form-item>
 
    
 
    <el-form-item label="广告留言">
        <el-input type="message" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
</el-form>
</template>
<script>


    export default {

        props: {
            coins: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {
                coin_type:[],
                form: {
                    crypto_currency: 1,
                    trade_type: "0",
                    country_code: '',
                    currency: '',
                    margin: '',
                    price: '',
                    min_price: '',
                    min_amount: '',
                    max_amount:'',
                    payment_window_minutes:'',
                    payment_provider:'',
                    message:'',
                }
            }
        },
        mounted(){
            this.coin_type=JSON.parse(this.coins)
            
        },
        methods: {
            onSubmit() {
               this.$http.post('/ad', this.form)
                    .then((response) => {
                        console.log(response)

                        toastr.success('You publish the comment success!')
                    }).catch(({response}) => {
                    //this.isSubmiting = false
                    //stack_error(response)
                })
            }
        }
    }
</script>