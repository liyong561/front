
export function mixins(...list) {
    return function (target) {
      Object.assign(target.prototype, ...list)
    }
  }
  
  
  const Foo = {
    foo() { console.log('foo') }
  };

  // 修饰
  
  @mixins(Foo)
  class MyClass {}
  
  let obj = new MyClass();
  obj.foo() // 'foo'
  