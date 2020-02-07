import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedLazyLoadedRouteRoutingModule } from './nested-lazy-loaded-route-routing.module';
import { NestedLazyLoadedRouteComponent } from './nested-lazy-loaded-route.component';


@NgModule({
  declarations: [NestedLazyLoadedRouteComponent],
  imports: [
    CommonModule,
    NestedLazyLoadedRouteRoutingModule
  ]
})
export class NestedLazyLoadedRouteModule { }
