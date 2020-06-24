import { HttpIntercepterService } from './service/http-intercepter.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TodComponent } from './components/tod/tod.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListTodsComponent } from './components/list-tods/list-tods.component';
import { AngularConceptsModule } from './angular-concepts/angular-concepts.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularConceptsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TodComponent,
    MenuComponent,
    WelcomeComponent,
    ListTodsComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
