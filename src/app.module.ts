import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {HelloWorldModule} from './hello-world/hello-world.module';
import {MaterialModule} from './material/material.module';

@NgModule({
  imports: [CommonModule, BrowserModule, HelloWorldModule, MaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
