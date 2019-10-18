<template>
    <div style="padding: 4em 2em;">
        <Form>
            <FormItem label="手机号（必填）">
                <Input type="text" v-model="user.tel" placeholder="请输入手机号" size="large">
                </Input>
            </FormItem>
            <FormItem label="密码（必填）">
                <Input type="password" v-model="user.pwd" placeholder="请输入密码" size="large">
                </Input>
            </FormItem>
            <FormItem label="姓名">
                <Input type="text" v-model="user.name" placeholder="请输入姓名" size="large">
                </Input>
            </FormItem>
            <FormItem label="性别">
                <RadioGroup v-model="user.gender">
                    <Radio label="男">男</Radio>
                    <Radio label="女">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem>
                <Button type="info" size="large" @click="handleSubmit" ghost long>开始注册</Button>
            </FormItem>
        </Form>
        <br>
        <div>
            已有账号？去
            <router-link to="/sign/in">登录</router-link>
        </div>
    </div>
</template>

<script>
    import Global from '@/components/Global.vue'

    export default {
        name: "SignUp",
        data() {
            return {
                user: {
                    tel: '',
                    pwd: '',
                    name: '',
                    gender: ''
                }
            }
        },
        methods: {
            handleSubmit() {
                var checkRes = this.checkUser();
                if(checkRes) {
                    this.$http.post(Global.PATH + '/sign/up', this.user).then((resp) => {
                        alert('注册成功！请点击“确定”进入')
                    }, (error) => {
                        this.$Message.error(error);
                    });
                }
            },
            checkUser() {
                if(!this.user.tel) {
                    this.$Message.error('请输入手机号！');
                    return false;
                }
                if(!/^[1](([3][0-9])|([4][5,7,9])|([5][0-9])|([6][6])|([7][3,5,6,7,8])|([8][0-9])|([9][8,9]))[0-9]{8}$/.test(this.user.tel)) {
                    this.$Message.error('手机号码格式错误！');
                    return false;
                }
                if(!this.user.pwd) {
                    this.$Message.error('请输入密码！');
                    return false;
                }
                return true;
            }
        },
    }
</script>

<style scoped>

</style>