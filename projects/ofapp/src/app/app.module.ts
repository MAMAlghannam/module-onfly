import { Injector, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { AnotherComponent } from './another/another.component';
import { Page1Component } from './page1/page1.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [AppComponent],
  providers: [
    // here
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector: injector });
    customElements.define('on-fly-app', el);
  }

  ngDoBootstrap() {}

}
