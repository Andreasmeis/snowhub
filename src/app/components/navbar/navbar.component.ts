import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isOpen: boolean = false;
  nav = new FormGroup(
    {
      value: new FormControl(false),
    }
  );


  closeNav () {
    this.nav.value.value = false;
  }
}
