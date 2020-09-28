import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmComponent } from './pages/farm/farm.component';
import StoreDetailComponent from './pages/store-detail/store-detail.component';
import { AppCommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { HeaderComoponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AccessComponent } from './config/acess/access.component';
import { RouterModule } from '@angular/router';
import { RoleComponent } from './config/role/role.component';
import { LoginModule } from './pages/login/login.module';
import { FormModule } from './form/form.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
import { NzDatePickerModule, NzFormModule } from 'ng-zorro-antd';
import { NgTestModule } from './ng-test/ng-test.module';

registerLocaleData(zh);

// module有什么作用
// 为什么要声明模块
// 不在这个模块导入
// 这个就是根模块了

@NgModule({
  declarations: [
    // 这个对于<router-outlet>影响很大
    AppComponent,
    FarmComponent,
    StoreDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 要被发现
    LoginModule,
    NgTestModule,
    AppCommonModule,
    ConfigModule,
    RouterModule,
    FormModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzDatePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
