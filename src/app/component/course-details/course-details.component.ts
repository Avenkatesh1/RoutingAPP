import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  public course = [
    {id: 1, name: 'Angular', fee: 150000},
    {id: 2, name: 'Angular-Material', fee: 150000},
    {id: 3, name: 'Bootstrap', fee: 15000},
  ]


}
