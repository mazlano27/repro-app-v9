import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LazyLoadedRouteComponent} from './lazy-loaded-route.component';

export const LAZY_LOADED_ROUTES: Routes = [
  {
    path: '',
    component: LazyLoadedRouteComponent,
    children: [
      {
        path: '',
        redirectTo: 'nested',
        pathMatch: 'full'
      },
      {
        path: 'nested',
        loadChildren: () => import('./nested-lazy-loaded-route/nested-lazy-loaded-route.module').then(m => m.NestedLazyLoadedRouteModule)
      }
    ]
  },
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
