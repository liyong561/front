import { callBackFn } from './common/fn.js';
// js是一门比较随意的语言
import { Point } from './common/point.js';

// const { logS } = require("./common/fn");
// js运行环境中内置的document对象，这个是全局的，拿来就用
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return true;
    }
}

console.log('kk');
var point = new Point(12,1221);
console.log(point.toString());
// var f = import('./common/fn.js');
var fn =() => import('./common/fn.js');
// f.then((log,callBackFn)=>{
//     logS();
// }); // 作为defult参数
// 加大括号
// f.then(({logS,callBackFn})=>{
//     logS();
// }); 

console.log(fn);
setTimeout(() => {
    console.log("End");
}, 1000);