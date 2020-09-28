// 已经会返回这个值
var te =(()=>{
    console.log("this is from the");
    return 34;
})();
console.log(te);

let a:number= 12;
var b:number[]= [232];
var bType = typeof b;
console.log(b[0]); // 
console.log(bType);

// var aa={[12,211]:[12,32,89]}; 这个结构确实很诡异，

var a2,a3;
// var aa={[a1,a2,a3]:[12,32,89]};
/**
 * ab的结构:
 * {
 * [x:number]：number[],
 * []这种应该叫什么技术？
 * }
 */
var ab={[a3]:[12,32,89],a2:[2,32,2]};
// console.log(aa[0]);
// console.log(aa[1]);
console.log(ab[0]);
console.log(ab[a3])


