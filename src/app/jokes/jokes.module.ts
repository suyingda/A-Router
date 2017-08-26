import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {JokesComponent} from './jokes.component';
import { JokesRoutes } from './jokes.routes'
@NgModule({
    declarations: [
        JokesComponent,
    ],
    imports: [
       
        RouterModule.forChild(JokesRoutes)
    ],
    providers: [],
    bootstrap: []
})
export class JokesModule { }
