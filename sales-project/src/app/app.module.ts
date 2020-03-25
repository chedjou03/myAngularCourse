import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { SalesPersonListBoostrapComponent } from './sales-person-list-boostrap/sales-person-list-boostrap.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent,
    SalesPersonListBoostrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
