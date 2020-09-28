import { CommonModule } from '@angular/common';
import { Component, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DailyPaperComponent from './daily-paper/daily-paper.component';
import { FormRoutingModule} from './form.routing.module'
import { ReactComponent } from './react/react.component';
import { ReportComponent } from './report/report.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule, NzDatePickerModule, NzFormControlComponent, NzFormModule, NzTableModule } from 'ng-zorro-antd';
import { RegistryComponent } from './registry/registry.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDemoTableEditRowComponent } from './table2/table2.component';

@NgModule({
    imports:[FormRoutingModule,FormsModule,CommonModule,ReactiveFormsModule,NzBreadCrumbModule,
    NzFormModule,NzSpaceModule,NzCardModule,NzTableModule,NzDatePickerModule],
    declarations:[ReportComponent,ReactComponent,DailyPaperComponent,RegistryComponent,
    NzDemoTableEditRowComponent]
})
export class FormModule{
}