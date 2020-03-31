import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomPreloadingStrategy} from './app.custom-preloading-strategy';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-loaded-route/lazy-loaded-route.module').then(m => m.LazyLoadedRouteModule),
    data: {preload: true, delay: false}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
