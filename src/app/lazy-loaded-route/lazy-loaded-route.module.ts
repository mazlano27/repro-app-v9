import {NgModule} from '@angular/core';
import {LazyLoadedRouteRouting} from './lazy-loaded-route.routing';
import {LazyLoadedRouteComponent} from './lazy-loaded-route.component';


@NgModule({
  declarations: [
    LazyLoadedRouteComponent
  ],
  imports: [
    LazyLoadedRouteRouting

  ]
})
export class LazyLoadedRouteModule {
}
