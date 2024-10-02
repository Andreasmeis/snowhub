import { Component } from '@angular/core';
import { FavouriteService } from 'src/app/services/favouriteService/favourite.service';
import { ResortService } from 'src/app/services/resortService/resort.service';
import { UserService } from 'src/app/services/userService/user.service';
import Swiper, { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  resorts: any = [];
  isLogged: any;
  isFavourite: boolean = false;

  configImages: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,

    },
  };

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 50,
      },
    },
  };

  constructor(private resortService: ResortService, private userService: UserService, private favouriteService: FavouriteService) {
    this.isLogged = !!this.userService.user;
   }

  ngOnInit() {
    console.log(this.isLogged)
    if (this.isLogged && this.favouriteService.favourites.length) {
      this.resorts = this.resortService.allResorts.filter((resort: any) => this.favouriteService.favourites.includes(resort.id));
      this.isFavourite = true;
    } else {
      this.resorts = this.resortService.allResorts.slice(0, 5)
    }

  }
}
