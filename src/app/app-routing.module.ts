import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseNameComponent } from './component/course-name/course-name.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { HomeComponent } from './component/home/home.component';
import { EcommerceWebDComponent } from './component/ecommerce-web-d/ecommerce-web-d.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CourseListComponent } from './component/course-list/course-list.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
   path:'course-name',
   component: CourseNameComponent
  },
  {
    path:'course-details',
    component: CourseDetailsComponent
  },
  {
    path:'ecommerce-web-d',
    component: EcommerceWebDComponent
  },
  {
    path:'course-list',
    component: CourseListComponent
  },
  {
    path:'**', // wild card routes
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
