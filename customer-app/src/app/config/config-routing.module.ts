import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../common/common.module';
import { FooterComponent } from '../common/footer/footer.component';
import { HeaderComoponent } from '../common/header/header.component';
import { AccessComponent } from './acess/access.component';
import { RoleComponent } from './role/role.component';


export const routes:Routes=[
    {
        path:'role', component:RoleComponent
    },
    {
        path:'access',component:AccessComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class ConfigRoutingModule{
ç
}