import { Injectable } from '@angular/core';
import { RequestService } from '../requestService/request.service';
import { FavouriteService } from '../favouriteService/favourite.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(private requestService: RequestService) { }

  getUser() {
    return this.requestService.getRequest({ url: 'user' }, true).then((resp: any) => {
      this.user = {
        id: resp.id,
        name: resp.name,
        email: resp.email
      }
      return this.user
    })
  }
}
