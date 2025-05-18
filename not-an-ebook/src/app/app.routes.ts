import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarLibroComponent } from './pages/buscar-libro/buscar-libro.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { SignUpFormComponent } from './pages/login/sign-up-form/sign-up-form.component';

export const routes: Routes = [
    {
        path: 'buscarLibro',
        component: BuscarLibroComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [
          { path: 'iniciarSesion', component: LoginFormComponent },
          { path: 'registrarse', component: SignUpFormComponent },
          { path: '', redirectTo: 'iniciarSesion', pathMatch: 'full' } 
        ]
    },
    {
        path: '**',
        component: HomeComponent,
    },
    {
        path: '',
        component: HomeComponent,
    }
];
