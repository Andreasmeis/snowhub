import { Component, Input } from '@angular/core';
import { FavouriteService } from 'src/app/services/favouriteService/favourite.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() data: any;
  isLiked = false;
  isHovered = false;
  isLogged = this.userService.user;

  constructor(private favouriteService: FavouriteService, private userService: UserService) {
  }

  ngOnInit() {
    this.isLiked = this.favouriteService.isFavourite(this.data.id);
  }

  changeLike() {
    if (!this.isLogged) {
      return;
    }
    
    if (this.isLiked) {
      this.favouriteService.removeFovourite(this.data.id)
      this.isLiked = false;
    } else if (!this.isLiked) {
      this.favouriteService.addFovourite(this.data.id)
      this.isLiked = true;
    }
  }

  isFavourite() {
    return this.favouriteService.isFavourite(this.data.id);
  }
}
