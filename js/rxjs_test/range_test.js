import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
 
// 函数作为参数，这是js提供的灵活语法
// 返回的是一个Observble<number>,有点像java中的stream
// 这个源码是使用js编写的
range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));