<template>
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="币钏">
            <el-select v-model="form.coin_type" placeholder="请选择币钟">
                <el-option label="比特币" value="BTC"></el-option>

            </el-select>
        </el-form-item>
        <el-form-item label="名称">
            <el-input v-model="form.wallet_name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="form.wallet_address"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>




    </el-form>
</template>

<script>


    export default {
        data() {
            return {
                form: {
                    wallet_name: '',
                    coin_type: '',
                    wallet_address: '',

                }
            }
        },
        methods: {
            onSubmit() {


                this.$http.post('/user/address', this.form)
                    .then((response) => {
                        console.log(response)

                        toastr.success('You publish the comment success!')
                    }).catch(({response}) => {
                    this.isSubmiting = false
                    stack_error(response)
                })
            }
        }
    }

</script>