import { Routes, RouterModule, Router } from "@angular/router";
import { LoginComponent } from './login.component';
import { ModuleWithProviders } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { FarmComponent } from '../farm/farm.component';
import { RightComponent } from 'src/app/common/right/right.component';




// 有，单独的文件导入
const routes :Routes=[
    {   
        // 随便加的一个Component
        // 这两个组件是什么关系？
        path:'login',component:RightComponent,
        children:
        [
            {path:'login',
            component:LoginComponent}
        ]
    }
];

// 现在这个接口变成泛型了，
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);