import {NgModule} from '@angular/core';
import {LazyLoadedRouteRouting} from './lazy-loaded-route.routing';
import {LazyLoadedRouteComponent} from './lazy-loaded-route.component';
import {MatCardModule} from '@angular/material/card';

const material = [
  MatCardModule
];

@NgModule({
  declarations: [
    LazyLoadedRouteComponent
  ],
  imports: [
    LazyLoadedRouteRouting,
    ...material
  ]
})
export class LazyLoadedRouteModule {
}
