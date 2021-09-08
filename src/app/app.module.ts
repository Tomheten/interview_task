import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { DEV_PROVIDERS } from '../_dev/dev-providers';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const additionalProviders: Provider[] = [];
if (!environment.production) {
  additionalProviders.push(...DEV_PROVIDERS);
}

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...additionalProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
