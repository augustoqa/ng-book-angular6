import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes, Router } from "@angular/router";
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common'

import { AppComponent } from './app.component';
import { IntroComponent } from "./intro/intro.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SidebarItemComponent } from "./sidebar/sidebar-item.component";
import { DemoFormSkuComponent } from "./demo-form-sku/demo-form-sku.component";
import { DemoFormSkuWithBuilderComponent } from "./demo-form-sku-wih-builder/demo-form-sku-with-builder.component";

import { ExampleDef } from "./example.model";

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Sku', name: 'DemoFormSku', path: 'sku', component: DemoFormSkuComponent},
  {label: 'Sku (with Builder)', name: 'DemoFormSkuWithBuilder', path: 'sku-builder', component: DemoFormSkuWithBuilderComponent}
];

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full' },
  { path: 'sku-builder', component: DemoFormSkuWithBuilderComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
