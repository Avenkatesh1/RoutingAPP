import { Component } from '@angular/core';


@Component({
  selector: 'app-ecommerce-web-d',
  templateUrl: './ecommerce-web-d.component.html',
  styleUrls: ['./ecommerce-web-d.component.css']
})
export class EcommerceWebDComponent {
  emailField: HTMLElement;

  constructor() {
    this.emailField = document.getElementById("email-address-input");
    if (this.emailField) {
      this.emailField.focus({
        preventScroll: true,
      });
    }
  }
}