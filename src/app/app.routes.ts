import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '1',
        component: Page1Component
    },
    {
        path: '2',
        component: Page2Component
    }
];
