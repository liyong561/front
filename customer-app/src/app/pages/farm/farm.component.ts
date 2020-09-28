import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

class Person{
    id:number;
    name:string;
}

// 这个是定义component，然后能够连接到该桌面

@Component({
 selector:'app-farm',
 templateUrl:'./farm.component.html',
 styleUrls: ['./farm.component.scss']
})
export class FarmComponent{
    // 除了一个简单页面，真的没有什么了
}