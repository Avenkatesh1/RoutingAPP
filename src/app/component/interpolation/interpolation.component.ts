import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  public name:string = "raju";
  emp = {
    fname: 'Satish',
    lname: 'Konduru',
    age : 43
  }

  employee = [
    {
      name: 'Satish',
      age : 43
    },
    {
      name: 'Renu',
      age : 37
    }
  ]

  imgURl = 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'
  public getMyName(){
    return `${this.name}`
  }

}
