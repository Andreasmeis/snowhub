import { Component } from '@angular/core';
import { ResortService } from 'src/app/services/resortService/resort.service';
import Swiper, { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  data: any = [];

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
  

  constructor(private resortService: ResortService) { }

  ngOnInit() {
    this.data = this.resortService.allResorts.slice(0, 5)
  }
}
