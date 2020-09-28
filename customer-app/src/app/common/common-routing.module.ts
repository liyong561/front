import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HeaderComoponent } from './header/header.component';
import { RightComponent} from './right/right.component'

const routes:Routes= [
    {
        path:'header', component:HeaderComoponent
    },
    {
        path:'footer',component:FooterComponent
    },
    {
        path:'right',component:RightComponent
    }
];

@NgModule(
    {
        // 具体什么作用，我现在还不是很清楚,但是应该是给
        // 但是module成为了一棵树，根模块在main.ts中体现
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule],
        declarations:[]
    }
)
export class AppCommonRoutingModule{

}