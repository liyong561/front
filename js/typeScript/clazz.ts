class Person{
    // 构造函数自动添加了name属性，并且是public，这个和JAVA的修饰符是一样的
    constructor(public name:string){
    }
}

var person = new Person("zina");
console.log(person.name);
document.write("this is from the document write");