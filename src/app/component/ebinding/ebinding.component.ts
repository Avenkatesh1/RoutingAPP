import { Component } from '@angular/core';

@Component({
  selector: 'app-ebinding',
  templateUrl: './ebinding.component.html',
  styleUrls: ['./ebinding.component.css']
})
export class EbindingComponent {
  onClickPrimary(){
    console.log("heyyy hiiii")
  }
  onDbClickSuccess(){
    console.log("heyyy hello") 
  }
  onOverDanger(){
    console.log("heyy mouse")
  }
  onOutDanger(){
    console.log(" i am in out")
  }
  onMouseMove(){
    console.log("mouse move")
  }
  keydown(){
    console.log("key press")
  }
  keyUp(){
    console.log("keyup")
  }
  keypress(){
    console.log("key pressed")
  }
  focus(){
    console.log("foccuesed")
  }

}
