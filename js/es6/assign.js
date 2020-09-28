
var a =[12,23,234,90];
var a1={'name':'liong','age':13};
var b = a;
var b1 = {...a1};
var c =[...a]; // 完全复制
a[0]=121;
var aa = 'name';
// 这个是计算属性
var b2 ={[a]:[12,32],'dd':23,aa:90};
var b3={a:[3,23,29],32:23,[aa]:90};

console.log(b2);
console.log(b3);
console.log(b2[a]);
console.log(b3[a]);
console.log(b3[32])
