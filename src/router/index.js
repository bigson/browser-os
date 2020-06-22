import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '../views/desktop/Desktop.vue'
import Login from '../views/authen/Login.vue'

Vue.use(Router)

export function createRouter () {
    let meta = {
                    copyright : '',
                    language  : 'VN',
                    type      : 'website',
                    site_name : '',
                    locale    : 'vi_VN'
                }

    const router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
                {
                    path: '/',
                    name: 'desktop',
                    meta: Object.assign({}, meta, {
                        title       : '',
                        description : '',
                    }),
                    components: {
                        default : Desktop,
                    }
                },
                {
                    path       : '/login',
                    name       : 'login',
                    components : {
                        default : Login
                    }
                }
            ],
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        }
    })

    // router.beforeEach((to, from, next) => {
    //     if (to.name !== 'Login') next({ name: 'login' })
    //     else next()
    // })

    return router
}