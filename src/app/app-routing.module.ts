import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-principal',
    loadChildren: () => import('./pages/home-principal/home-principal.module').then( m => m.HomePrincipalPageModule)
  },
  {
    path: 'home-usuarios',
    loadChildren: () => import('./pages/home-usuarios/home-usuarios.module').then( m => m.HomeUsuariosPageModule)
  },
  {
    path: 'home-gps',
    loadChildren: () => import('./pages/home-gps/home-gps.module').then( m => m.HomeGpsPageModule)
  },
  {
    path: 'home-configuracion',
    loadChildren: () => import('./pages/home-configuracion/home-configuracion.module').then( m => m.HomeConfiguracionPageModule)
  },
  {
    path: 'home-dejanos-mensaje',
    loadChildren: () => import('./pages/home-dejanos-mensaje/home-dejanos-mensaje.module').then( m => m.HomeDejanosMensajePageModule)
  },
  {
    path: 'home-menu',
    loadChildren: () => import('./pages/home-menu/home-menu.module').then( m => m.HomeMenuPageModule)
  },
  {
    path: 'home-buscar',
    loadChildren: () => import('./pages/home-buscar/home-buscar.module').then( m => m.HomeBuscarPageModule)
  },
  {
    path: 'home-crear',
    loadChildren: () => import('./pages/home-crear/home-crear.module').then( m => m.HomeCrearPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
