import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { TaskbarCgComponent } from './taskbar-cg/taskbar-cg.component';
import { TaskbarKsComponent } from './taskbar-ks/taskbar-ks.component';
import { TaskbarQtvComponent } from './taskbar-qtv/taskbar-qtv.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TaskbarComponent,
    TaskbarCgComponent,
    TaskbarKsComponent,
    TaskbarQtvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
