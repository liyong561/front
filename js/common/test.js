a = 132;
b =123;
console.log("the result is :");
console.log(a+b);

// js中方法的使用
function fn(){
    console.log("hello,this is a javascript lib");
    date = new Date();
    console.log("the date is :"+ date);
    // Array是内置对象
    var arr = new Array(3);
    arr.push("the first one");
    console.log("the arr is :"+arr.length);
    
}
f2 = fn; // 方法赋值
f2(); //  方法引用

a2 = ()=>{};
a2();
