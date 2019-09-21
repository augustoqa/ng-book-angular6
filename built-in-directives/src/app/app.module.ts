import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSwitchExampleComponent } from "./ng-switch-example/ng-switch-example.component";
import { NgStyleExampleComponent } from "./ng-style-example/ng-style-example.component";
import { NgClassExampleComponent } from "./ng-class-example/ng-class-example.component";

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchExampleComponent,
    NgStyleExampleComponent,
    NgClassExampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
