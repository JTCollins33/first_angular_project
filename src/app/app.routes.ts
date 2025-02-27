import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '1',
        // component: Page1Component
        loadComponent: () => import('./page1/page1.component').then(m => m.Page1Component)
    },
    {
        path: 'directives',
        // component: directivespageComponent
        // loadComponent is for lazy loading, component is for eager loading
        loadComponent: ()=> import('./directives-page/directives-page.component').then(m => m.DirectivesPageComponent)
    },
    {
        path: 'modules',
        // component: ModulesPageComponent
        loadComponent: () => import('./modules-page/modules-page.component').then(m => m.ModulesPageComponent)
    },
    {
        path: 'pipes',
        loadComponent: () => import('./pipes-page/pipes-page.component').then(m => m.PipesPageComponent)
    },
    {
        path: '**',
        // component: NotFoundComponent
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
