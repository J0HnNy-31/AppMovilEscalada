import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeGpsPage } from './home-gps.page';

const routes: Routes = [
  {
    path: '',
    component: HomeGpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeGpsPageRoutingModule {}
