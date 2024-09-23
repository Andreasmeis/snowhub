import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialog } from 'src/app/dialogs/login-dialog/login-dialog';
import { FavouriteService } from 'src/app/services/favouriteService/favourite.service';
import { RequestService } from 'src/app/services/requestService/request.service';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  user: any;
  isOpen: boolean = false;
  nav = new FormGroup({
    value: new FormControl(false),
  });

  constructor(public dialog: MatDialog, private requestService: RequestService, private userService: UserService, private favouritesService: FavouriteService) { }

  ngOnInit() {
    if (this.requestService.token) {
      this.userService.getUser().then((user: any) => {
        this.user = user
        this.favouritesService.setFavourites()
      })
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialog, {
      id: 'login-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        location.reload();
      }
    });
  }

  logout() {
    this.requestService.postRequest({ url: 'logout' }, true).then(() => {
      localStorage.removeItem('token');
      location.reload();
    })
  }

  closeNav() {
    this.nav.value.value = false;
  }
}
