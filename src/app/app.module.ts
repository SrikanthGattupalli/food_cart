import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    CartComponent,
    AdminComponent,
    RestaurentsComponent,
    NotificationsComponent,
    LoginComponent,
    SignupComponent,
    SnackBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
