import { RouterModule } from '@angular/router';
/* import {HomeComponent} from './home/home.component';
import {JokesComponent } from './jokes/jokes.component'; */

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        /*   component:HomeComponent */
    },
    {
        path: 'jokes',
        loadChildren: './jokes/jokes.module#JokesModule'
        /*  component:JokesComponent */
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
        /* 	component:HomeComponent */
    }
];
