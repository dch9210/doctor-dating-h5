<template>
    <div style="padding: 4em 2em;">
        <img alt="Vue logo" src="../assets/logo.png">
        <Form>
            <FormItem prop="user" label="手机号">
                <Input type="text" v-model="user.tel" placeholder="请输入手机号" size="large">
                </Input>
            </FormItem>
            <FormItem prop="password" label="密码">
                <Input type="password" v-model="user.pwd" placeholder="请输入密码" size="large">
                </Input>
            </FormItem>
            <FormItem>
                <Button type="success" size="large" @click="handleSubmit" ghost long>登录</Button>
            </FormItem>
        </Form>
        <br>
        <div>
            还没有账号？去
            <router-link to="/sign/up">注册</router-link>
        </div>
    </div>
</template>

<script>
    import Global from '@/components/Global.vue'

    export default {
        name: "SignIn",
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
                var _this = this;
                var checkRes = this.checkUser();
                if (checkRes) {
                    this.$http.post(Global.PATH + '/sign/in', this.user).then((resp) => {
                        if (resp.body.code) {
                            this.$Message.error(resp.body.msg);
                        } else {
                            this.$Message.success({
                                content: '登录成功!',
                                duration: 1.5,
                                onClose: function () {
                                    // 登录成功
                                    // 设置cookie
                                    Global.COOKIE.set(Global.SESSION_KEY, JSON.stringify(resp.body));
                                    // 跳转到主页
                                    _this.$router.push({
                                        path: '/home'
                                    })
                                }
                            });
                        }
                    }, (error) => {
                        this.$Message.error(error);
                    });
                }
            },
            checkUser() {
                if (!this.user.tel) {
                    this.$Message.error('请输入手机号！');
                    return false;
                }
                if (!/^[1](([3][0-9])|([4][5,7,9])|([5][0-9])|([6][6])|([7][3,5,6,7,8])|([8][0-9])|([9][8,9]))[0-9]{8}$/.test(this.user.tel)) {
                    this.$Message.error('手机号码格式错误！');
                    return false;
                }
                if (!this.user.pwd) {
                    this.$Message.error('请输入密码！');
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style scoped>

</style>