import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HttpCompoent } from './http/http.component';
import { IfElseComponent } from './if-else/if-else.compoent';

const routes:Routes=[
    {
        path:"ifElse",
        component:IfElseComponent,
    },
    {
        path:'info',
        component:HttpCompoent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class NgTestRoutingModule{

}