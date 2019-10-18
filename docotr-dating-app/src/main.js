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

/*
登录校验拦截
 */
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // var user = sessionStorage.getItem('User-Cache');
    var user = Global.COOKIE.get(Global.SESSION_KEY);
    console.log(user)
    if (user) {
      next();
    }
    else {
      // 验证不通过跳去登录页面
      next({
        path: '/sign/in',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
