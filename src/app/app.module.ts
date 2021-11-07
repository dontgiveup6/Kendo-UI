import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { FormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDataComponent } from './add-data/add-data.component';

@NgModule({
  declarations: [AppComponent, AddDataComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    BrowserAnimationsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
