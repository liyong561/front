import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        // 这个应该也是懒加载,但是这个写法就很奇怪了
        // 比较难看懂
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]