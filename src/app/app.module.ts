import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {BookListComponent} from './components/book-list/book-list.component';
import {UpdateBookComponent} from './components/update-book/update-book.component';
import {CreateBookComponent} from './components/create-book/create-book.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {ProfileComponent} from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {authInterceptorProviders} from "./_jwt/auth.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-o";
import {OwlModule} from "ngx-owl-carousel";
import {ContactComponent} from "./contact/contact.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    BookListComponent,
    ProfileComponent,
    BookDetailsComponent,
    CreateBookComponent,
    UpdateBookComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    BoardAdminComponent,
    ContactComponent

  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        OwlModule,
        CarouselModule,
        BrowserAnimationsModule,
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
