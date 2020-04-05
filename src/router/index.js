import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [{
                    path: '/dashboard',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/allot',
                    component: () =>
                        import ( /* webpackChunkName: "table" */ '../components/page/Allot.vue'),
                    meta: { title: '地区划分' }
                },
                {
                    path: '/changelog',
                    component: () =>
                        import ( /* webpackChunkName: "tabs" */ '../components/page/Changelog.vue'),
                    meta: { title: '操作日志' }
                },
                {
                    path: '/404',
                    component: () =>
                        import ( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/place',
                    component: () =>
                        import ( /* webpackChunkName: "donate" */ '../components/page/Place.vue'),
                    meta: { title: '地区分析' }
                },
                {
                    path: '/grade',
                    component: () =>
                        import ( /* webpackChunkName: "donate" */ '../components/page/Grade.vue'),
                    meta: { title: '年级分析' }
                },
                {
                    path: '/gender',
                    component: () =>
                        import ( /* webpackChunkName: "donate" */ '../components/page/Gender.vue'),
                    meta: { title: '性别分析' }
                },
                {
                    path: '/single',
                    component: () =>
                        import ( /* webpackChunkName: "donate" */ '../components/page/Single.vue'),
                    meta: { title: '单机分析' }
                },
                {
                    path: '/map',
                    component: () =>
                        import ( /* webpackChunkName: "donate" */ '../components/page/Map.vue'),
                    meta: { title: '单机分析' }
                }
            ]
        },
        {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});