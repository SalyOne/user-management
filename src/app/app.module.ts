import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LogService} from "./services/log.service";
import {UsersModule} from "./modules/users/users.module";
import {ProductsModule} from "./modules/products/products.module";
import {RouterModule} from "@angular/router";
import {ProductsComponent} from "./modules/products/products.component";
import {UsersComponent} from "./modules/users/users.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UsersModule,
    // ProductsModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
