import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './authentication/login/login.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LogoutComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule,
    AppStoreModule,
    MaterialModule,
    AuthModule.forRoot({
      domain: 'fisio.eu.auth0.com',
      clientId: 'Z0NBrRVust481NCjWFe9OSgLvaGUKr15',
      authorizationParams: {
        redirect_uri: 'http://localhost:3000/callback',
      },
    }),
  ],
  providers: [{ provide: 'API_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
