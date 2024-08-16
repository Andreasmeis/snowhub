import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialog } from 'src/app/dialogs/login-dialog/login-dialog';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  user: any;
  isOpen: boolean = false;
  nav = new FormGroup(
    {
      value: new FormControl(false),
    }
  );

  constructor(public dialog: MatDialog, private requestService: RequestService) { }

  ngOnInit() {
    if (this.requestService.token) {
      this.requestService.getRequest({ url: 'user' }, true).then((data: any) => {
        this.user = {
          name: data.name,
          email: data.email
        };
      })
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '20vw',
      height: '70vh',
      id: 'login-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requestService.getRequest({ url: 'user' }, true).then((data: any) => {
          this.user = {
            name: data.name,
            email: data.email
          };
        })
      }
    });
  }

  closeNav() {
    this.nav.value.value = false;
  }
}
