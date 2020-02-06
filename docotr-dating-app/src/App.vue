<template>
    <div id="app">
        <!--<div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>-->
        <div class="header">
            <!--<Row>
                <Col :xs="{ span: 3 }" :lg="{ span: 3, offset: 0 }">
                    <router-link to="/doctor/home" style="color: black;">
                        <Icon type="ios-arrow-dropleft" :size="30" style="color: #fff;"/>
                    </router-link>
                </Col>
                &lt;!&ndash;<Col :xs="{ span: 5, offset: 16 }" :lg="{ span: 5, offset: 16  }">
                    <strong style="line-height: 30px;">
                        放号管理
                    </strong>
                </Col>&ndash;&gt;
            </Row>-->
        </div>
        <router-view/>

        <div class="footer">
            <div class="module-nav">
                <div class="nav-i">
                    <div @click="goHomePage">
                        <div class="iconfont icon">
                            <Icon type="ios-home-outline" :size="30"/>
                        </div>
                        <label>首页</label>
                    </div>
                </div>
                <div class="nav-i">
                    <div class="iconfont icon">
                        <Icon type="ios-mail-outline" :size="30"/>
                    </div>
                    <label>消息</label>
                </div>
                <div class="nav-i">
                    <div class="iconfont icon">
                        <Icon type="ios-person-outline" :size="30"/>
                    </div>
                    <label>我的</label>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Global from "./components/Global";

    export default {
        name: "App",
        methods: {
            goHomePage() {
                var user = JSON.parse(Global.COOKIE.get(Global.SESSION_KEY));
                if (user && user.type == 'DOCTOR') {
                    this.$router.push({
                        name: 'doctor-hose'
                    })
                } else if (user && user.type == 'PATIENT') {
                    this.$router.push({
                        path: '/sign/in'
                    })
                } else {
                    this.$router.push({
                        path: '/sign/in'
                    })
                }
            }
        },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*background: #eee;*/
    }

    .header {
        background: linear-gradient(top, #72ABF4, #8599F7);
        background: -ms-linear-gradient(top, #72ABF4, #8599F7);
        background: -webkit-linear-gradient(top, #72ABF4, #8599F7);
        background: -moz-linear-gradient(top, #72ABF4, #8599F7);
        padding: 20px 20px;
        /*background: #5199FF;*/
        width: 100%;
        height: 220px;
        position: fixed;
        z-index: -1
    }

    .footer {
        position: fixed;
        bottom: 0;
        z-index: 999;
        max-width: 1080px;
        width: 100%;
        border-top: 1px solid #C0C0C0;
        box-shadow: -2px -2px 2px #C0C0C0;
    }

    .module-nav {
        display: flex;
        justify-content: space-around;
    }

    .nav-i {
        width: 60px;
        text-align: center;
    }

</style>
