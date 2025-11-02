import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { AdminComponent } from './components/admin-component/admin-component';

export const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent, canActivate: [authGuard] },
{ path: 'admin', component: AdminComponent, canActivate: [authGuard, adminGuard] },
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '**', redirectTo: 'home' }
];
