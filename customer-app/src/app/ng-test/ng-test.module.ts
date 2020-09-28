import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { IfElseComponent } from './if-else/if-else.compoent';
import { NgTestRoutingModule } from './ng-test-routing.module';

@NgModule({
    imports:[NgTestRoutingModule,CommonModule],
    declarations:[IfElseComponent]
})
export class NgTestModule{

}