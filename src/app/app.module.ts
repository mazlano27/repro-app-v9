import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

const material = [
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserTransferStateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
