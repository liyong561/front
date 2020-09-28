// js基本写法
export default class VueTest{
    name;
    id;
}
// 报错
// let getTempItem = id => { id: id, name: "Temp" };

// 不报错, 这个括号是什么意思，我真的不知道
let getTempItem = id => ({ id: id, name: "Temp" });