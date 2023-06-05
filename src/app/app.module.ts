import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ArastirmaciIsimPipe } from './arastirmaci-isim.pipe';
import { YayinBaslikPipe } from './yayin-baslik.pipe';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommonModule } from '@angular/common';
import { BroadcastDetailComponent } from './broadcast-detail/broadcast-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AdminComponent,
    ArastirmaciIsimPipe,
    YayinBaslikPipe,
    UserDetailComponent,
    BroadcastDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule 
  ],
  providers: [
    {
      provide:'apiUrl',
      useValue:'https://demo.limantech.com/cards/public/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
