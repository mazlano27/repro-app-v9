import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LazyLoadedRouteComponent} from './lazy-loaded-route.component';

export const LAZY_LOADED_ROUTES: Routes = [
  {
    path: '', component: LazyLoadedRouteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LAZY_LOADED_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class LazyLoadedRouteRouting {
}
