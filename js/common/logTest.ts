class Maths {
    add(a, b) {
      return a + b;
    }
  }
  
  // python和js中都有装饰器的概念
  function log(target, name, descriptor) {
    var oldValue = descriptor.value;
  
    descriptor.value = function() {
      console.log(`Calling ${name} with`, arguments);
      return oldValue.apply(this, arguments);
    };
  
    return descriptor;
  }
  
  const math = new Maths();
  
  // passed parameters should get logged now
  math.add(2, 4);