import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
  declarations: [
    AppComponent,NgLetDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgLetDirective]
})
export class AppModule { }
