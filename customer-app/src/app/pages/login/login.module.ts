import { NgClass } from "@angular/common";
import { NgModule } from '@angular/core';
import { routing } from './login-routing';
import { LoginComponent } from './login.component';



@NgModule({
    // 声明是有特定接口的
    // 这个module的注解是干啥的？
    // 这个模块需要在上一级路由用映入
    declarations:[
        LoginComponent
    ],
    imports:[
        // 路由
        routing
    ],
    exports:[
    ]
})
export class LoginModule{

}