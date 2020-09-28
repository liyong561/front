angular.module('myApp',[])
    .controller('myCtrl',function () {})
    .component('myName',{
        template:'<div>我的名字是听风是风</div>'
    })
    .directive('youName',function (){
        return{
            restrict:'AE',
            replace:true,
            template:'<div>你的名字是陌生人</div>'
        }
    })
    // controller定义的是数据的获取方式