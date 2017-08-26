import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * router 
 */
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
/* import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component'; */
/**
 * router 
 */
import { appRoutes } from './app.routes'
@NgModule({
  declarations: [
    AppComponent,
   /*  HomeComponent,
    JokesComponent */
  ],
  imports: [
    BrowserModule,
    /**
 * router 
 */
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
