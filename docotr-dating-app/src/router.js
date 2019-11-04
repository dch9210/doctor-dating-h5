import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/sign',
            name: 'sign',
            component: () => import('./views/Sign.vue'),
            children: [
                {
                    path: 'in',
                    component: () => import('./views/SignIn.vue')
                },
                {
                    path: 'up',
                    component: () => import('./views/SignUp.vue')
                },
            ]
        },
        {
            path: '/dating/choose',
            name: 'dating-choose',
            component: () => import('./views/DatingChoose.vue'),
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/doctor/home',
            name: 'doctor-hose',
            component: () => import('./views/DoctorHome.vue'),
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/doctor/release/date',
            name: 'doctor-release-date',
            component: () => import('./views/DoctorRelease.vue'),
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/doctor/release/schedu/manage',
            name: 'doctor-release-schedu-edit',
            component: () => import('./views/DoctorScheduManage.vue'),
            meta: {
                requireAuth: true,
            }
        },
    ]
})
