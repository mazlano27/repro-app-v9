import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedLazyLoadedRouteComponent } from './nested-lazy-loaded-route.component';

const routes: Routes = [{ path: '', component: NestedLazyLoadedRouteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedLazyLoadedRouteRoutingModule { }
