import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
import VueResource from 'vue-resource'
import Global from '@/components/Global.vue'

Vue.use(VueResource)
Vue.use(ViewUI);
Vue.config.productionTip = false

// router config
const originalPush = router.push
router.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/*
登录校验拦截
 */
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        // var user = sessionStorage.getItem('User-Cache');
        var user = Global.COOKIE.get(Global.SESSION_KEY);
        if (user) {
            next();
        } else {
            // 验证不通过跳去登录页面
            next({
                path: '/sign/in',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
})

/*
日期格式化
 */
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Vue.filter("date", function (value) {
    return new Date(value).Format('yyyy-MM-dd hh:mm:ss');
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
