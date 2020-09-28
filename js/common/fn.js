
// a是一个函数，接受一个参数
var a = function(init){
    return function(target){
        console.log(init);
        console.log(target);
    }

}

// 两层函数
// var b  = a('sss');
// b('the next is collection');
var logS = function(){
    console.log("to be smart, learn anything");
}
// 这个回调，不知道函数的类型
var callBackFn =function(data,fn){
    console.log(data);
    var a = fn("dd","dddddd");
}
a("dd")("ee");
// 导入这个模块,语句就会被执行
console.log("import the fn module");
export {logS,callBackFn};

!function(){()=>{console.log("我的生命周期很短")}}();

// var liList = document.getElementsByTagName('li')
// for(var i=0; i<6; i++){
//   !function(ii){
//     liList[ii].onclick = function(){
//       alert(ii) // 0、1、2、3、4、5
//     }
//   }(i)
// }