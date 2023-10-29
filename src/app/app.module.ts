import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { SharednavbarComponent } from './sharednavbar/sharednavbar.component';
import { AboutusOwnerComponent } from './aboutus-owner/aboutus-owner.component';
import { AboutusChefsComponent } from './aboutus-chefs/aboutus-chefs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    MenuComponent,
    SharednavbarComponent,
    AboutusOwnerComponent,
    AboutusChefsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
