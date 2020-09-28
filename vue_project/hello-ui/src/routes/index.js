import Vue from 'vue'
// 名字可以自定义
import Router from 'vue-router'
import HelloComponet from '../components/HelloWorld.vue'
import House from '../components/school/House.vue'
import Student from '../components/school/Student.vue'
import Teacher from '../components/school/Teacher.vue'

// 名字发叫Router，不叫这个，没有检查
// js弱类型，不利于程序自动化检测,但是确很灵活，比如下面的compoenent，在angularjs中很难称之为cm
Vue.use(Router);
// const Foo ={
//     template:'<div>foo</div>'
// };  这可能有些问题
// const Bar = { template: '<div>bar</div>' }


export default new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path:'/student',
        component:Student,
    },
    {
        path:'/teacher',
        component:Teacher,
    },
    {
        path:'/',
        component:HelloComponet,
    },
    {
        path:"/house",
        component:House
    },
    {
        path:'/**',
        component:HelloComponet
    }
    ]
})