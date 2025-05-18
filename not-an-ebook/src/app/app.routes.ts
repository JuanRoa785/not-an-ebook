import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarLibroComponent } from './pages/buscar-libro/buscar-libro.component';

export const routes: Routes = [
    {
        path: 'buscarLibro',
        component: BuscarLibroComponent,
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
