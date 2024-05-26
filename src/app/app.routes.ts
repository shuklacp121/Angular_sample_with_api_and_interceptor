import { Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'person',
        component: PersonComponent
    },
    {
        path: 'layout',
        component: LayoutComponent
    }
];
