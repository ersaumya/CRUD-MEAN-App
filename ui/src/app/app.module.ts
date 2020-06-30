import { APP_CONFIG, IAppConfig } from './shared/appconfig';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { environment } from 'src/environments/environment';


const AppConfig: IAppConfig = {
  apiEndPoint: environment.apiEndPoint,
};

@NgModule({
  declarations: [AppComponent, CreateComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
