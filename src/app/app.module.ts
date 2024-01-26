import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PrpertyBindingComponent } from './component/prperty-binding/prperty-binding.component';
import { CbindingComponent } from './component/cbinding/cbinding.component';
import { SbindingComponent } from './component/sbinding/sbinding.component';
import { EbindingComponent } from './component/ebinding/ebinding.component';
import { RsponsiveNaveBarComponent } from './component/rsponsive-nave-bar/rsponsive-nave-bar.component';
import { EcommerceWebDComponent } from './component/ecommerce-web-d/ecommerce-web-d.component';
import { CourseNameComponent } from './component/course-name/course-name.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CourseListComponent } from './component/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PrpertyBindingComponent,
    CbindingComponent,
    SbindingComponent,
    EbindingComponent,
    RsponsiveNaveBarComponent,
    EcommerceWebDComponent,
    CourseNameComponent,
    CourseDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
