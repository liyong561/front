
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import {AppCommonModule} from  '../common/common.module'
import { FooterComponent } from '../common/footer/footer.component';
import { HeaderComoponent } from '../common/header/header.component';
import { AccessComponent } from './acess/access.component';
import { ConfigRoutingModule } from './config-routing.module';
import { RoleComponent } from './role/role.component';


@NgModule({
    // component在一个module中声明就行了
    declarations:[RoleComponent,AccessComponent],
    // ngIf就在这里
    imports:[ConfigRoutingModule,AppCommonModule,CommonModule]
   
})
export class ConfigModule{

}