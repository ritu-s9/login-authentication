import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'auth',
        pathMatch: 'full'
    },
    {
        path:'auth',
        loadChildren:()=> import('../app/components/auth/auth.routes').then((r) => r.routes)
    }
];
