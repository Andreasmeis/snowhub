import { Component, Input } from '@angular/core';
import { FavouriteService } from 'src/app/services/favouriteService/favourite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() data: any;
  isLiked = false;
  isHovered = false;

  constructor(private favouriteService: FavouriteService) {
  }

  ngOnInit() {
    this.isLiked = this.favouriteService.isFavourite(this.data.id);
  }

  changeLike() {
    if (this.isLiked) {
      this.favouriteService.removeFovourite(this.data.id)
      this.isLiked = false;
    } else {
      this.favouriteService.addFovourite(this.data.id)
      this.isLiked = true;
    }
  }

  isFavourite() {
    return this.favouriteService.isFavourite(this.data.id);
  }
}
