import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from '../common/footer/footer.component';
import DailyPaperComponent from './daily-paper/daily-paper.component';
import { ReactComponent } from './react/react.component';
import { RegistryComponent } from './registry/registry.component';
import { ReportComponent } from './report/report.component';
import { NzDemoTableEditRowComponent } from './table2/table2.component';


const routes:Routes=[
    {
        path:'form',
        children:[
            {
                path:'registry',
                component:RegistryComponent },
            {
                path:'report',
                component:ReportComponent
            },
            {   
                // 增加一个组件和路由，非常的方便
                path:'react',
                component:ReactComponent
            },
            {
                path:'daily-paper',
                component: DailyPaperComponent
            },
            {
                path:'table2',
                component:NzDemoTableEditRowComponent
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule{

}