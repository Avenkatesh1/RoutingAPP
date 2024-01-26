import { Component } from '@angular/core';

@Component({
  selector: 'app-sbinding',
  templateUrl: './sbinding.component.html',
  styleUrls: ['./sbinding.component.css']
})
export class SbindingComponent {
  public myColor = 'blue'
  public isRequired:boolean=true
  public myStyleGroup={
    color:'green',
    fontStyle:'italic',
    fontSize:'50px'
  }

}
