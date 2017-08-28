import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';


import { homeRoutes } from './home.routes';
@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
