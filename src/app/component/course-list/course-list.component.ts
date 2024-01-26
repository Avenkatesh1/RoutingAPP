import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  public Coursedetails;
  constructor(private _router:Router){}
   public CourseList = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"React"},
    {"id":3, "name":"Vue"},
    {"id":4, "name":"Bootstrap"},
    {"id":5, "name":"MangoDB"}
   ]
   goBack(){
    let BackId = this.Coursedetails -1;
    this._router.navigate(['/course-details'])
   }
}
