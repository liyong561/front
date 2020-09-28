function f(){
    console.log("this is no");
}

var c ={
    'name':'liyong',
    'city':'beijing',
    'age':21
};



var b =13;

// 代码模式
// []括号放在value里面就是数组了
var ccc ={
    'name':[b],
    'age': [b>2?21:3,b<12?21:12]
};
var ccc2 ={
    'name':[b],
    // 这种写法不好，语言它灵活了，不该出现
    'age': [b>2?21:3,(()=>{return b<12?21:12})()]
};
var ccc3 ={
    'name':b,
    'age': [b>2?21:3, b<12?21:12]
};

console.log(ccc)
console.log(ccc2)
console.log(ccc3)

