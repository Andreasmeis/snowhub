import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { resorts } from 'src/assets/resorts';

import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.less']
})
export class ResortComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  data: any = [];

  constructor(private request: RequestService) { }

  ngOnInit() {
    let loginParams = {
      url: 'login',
      req: {
        email: 'meis0@test.com',
        password: 'paokara23'
      }
    }
    this.request.postRequest(loginParams).then(res => console.log(res))
    this.request.getRequest({ url: 'SnowResorts'}).then(res => console.log(res))
    for (let i = 0; i < 4; i++) {
      console.log(resorts[i])
      this.data.push(resorts[i]);
    }
    console.log(this.data)
  }
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
