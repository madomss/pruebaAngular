import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full',
    },
    {
        path: 'employees',
        loadChildren: () => import('./pages/users/users.routes').then(routes => routes.UserRoutes),
    }
]