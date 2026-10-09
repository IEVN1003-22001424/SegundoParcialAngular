import { Routes } from '@angular/router';

export const routes: Routes = [
    //por cada juego de rutas es un objeto path= camino de ruta

   
    {
        path: 'formularios',
        children: [
            {
                path: 'distancia',
                loadComponent: () =>
                    import('./formularios/distancia/distancia').then(
                        (c) => c.Distancia
                    )
            },
            {
                path: 'zodiaco',
                loadComponent: () =>
                    import('./formularios/zodiaco/zodiaco').then(
                        (c) => c.Zodiaco
                    )
            }
        ]
    },
    {
        path: 'escuela',
        children: [
            {
                path: 'lista-escuela',
                loadComponent: () =>
                    import('./escuela/lista-escuela/lista-escuela').then(
                        (c) => c.ListaEscuela
                    ),
            },
        ]
    },
    {
        path: 'escuela',
        children: [
            {
                path: 'cinepolis',
                loadComponent: () =>
                    import('./escuela/cinepolis/cinepolis').then(
                        (c) => c.Cinepolis
                    ),
            },
        ]
    },

    {path:'', redirectTo: 'admin', pathMatch: 'full'},
    {path: '**', redirectTo: 'admin' },

];