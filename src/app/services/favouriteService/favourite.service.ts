import { Injectable } from '@angular/core';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favourites: number[] = [];

  constructor(private userService: UserService) {}

  addFovourite(resortId: number) {
    this.favourites.push(resortId);
    localStorage.setItem(this.userService.user.id, JSON.stringify(this.favourites))
  }

  removeFovourite(resortId: number) {
    this.favourites = this.favourites.filter(id => id !== resortId);
    localStorage.setItem(this.userService.user.id, JSON.stringify(this.favourites))
  }

  setFavourites() {
    this.favourites = JSON.parse(localStorage.getItem(this.userService.user.id) ?? '[]');
  }

  isFavourite(resortId: number) {
    return this.favourites.includes(resortId);
  }
}
