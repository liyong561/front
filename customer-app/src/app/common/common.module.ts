import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppCommonRoutingModule } from './common-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComoponent } from './header/header.component';
import { RightComponent } from './right/right.component';


@NgModule({
      // 这个两个都要有
      
    declarations:[FooterComponent,HeaderComoponent,RightComponent],
    exports:[FooterComponent,HeaderComoponent],
    imports:[AppCommonRoutingModule,RouterModule]
    // 没有自己导出自己的
    // exports:[AppCommonModule]

})
export class AppCommonModule{

}