import Vue from 'vue'
// vue-router这个模块
import VueRouter from 'vue-router'
import View1 from './views/view1.vue'
import View2 from './views/view2.vue'

Vue.use(VueRouter)
 
export default new VueRouter({
    base: '/hello/',
    linkActiveClass: 'active',
    mode: 'history',
    // 路由配置
    routes: [
    {
        path: '/view1',
        component: View1
    }, {
        path: '/view2',
        component: View2
    }
    ]
})