import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from './services/requestService/request.service';
import { ResortService } from './services/resortService/resort.service';
import { UserService } from './services/userService/user.service';
import { FavouriteService } from './services/favouriteService/favourite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'snowhub';
  flag = false;
  user: any;

  constructor(public dialog: MatDialog, private requestService: RequestService, private resortService: ResortService, private userService: UserService, private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.requestService.token = localStorage.getItem('token');
    this.resortService.getAllResorts().then(() => {
      if (this.requestService.token) {
        this.userService.getUser().then((user: any) => {
          this.user = user;
          this.favouriteService.setFavourites()
          this.flag = true;
        })
      } else {
        this.flag = true;
      }
    });
  }
}
