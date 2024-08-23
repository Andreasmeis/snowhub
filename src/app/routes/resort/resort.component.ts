import { Component, ViewEncapsulation } from '@angular/core';
import { RequestService } from 'src/app/services/requestService/request.service';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import { SwiperOptions } from 'swiper';
import { ActivatedRoute } from '@angular/router';
import {  ActivitiesIcons } from 'src/app/interfaces/resorts';
import { ResortService } from 'src/app/services/resortService/resort.service';
@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ResortComponent {
  resortId = this.route.snapshot.params['resortId'];
  images: any[] = [];
  resort: any;
  cost: any = 13;
  lifts: any;
  visitors: any = 1;
  ActivitiesIcons = ActivitiesIcons;

  configImages: SwiperOptions = {
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

  constructor(private request: RequestService, private route: ActivatedRoute, private resortService: ResortService) { }

  ngOnInit() {
    this.resort = this.resortService.getActiveResort(this.resortId)
    this.getCost();
    this.getLifts();
  }
  
  ngAfterViewInit() {
    // Get the images data before initializing PhotoSwipe
    const items = this.getImagesData();

    // Initialize PhotoSwipeLightbox with the items
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery--responsive-images',
      children: 'a',
      pswpModule: PhotoSwipe,
      dataSource: items // Pass the image data directly here
    });

    lightbox.init();
  }

  getImagesData() {
    const items: any[] = [];
    const galleryElements = document.querySelectorAll('#gallery--responsive-images a');

    galleryElements.forEach((element: any) => {
      const img = element.querySelector('img');

      // Use the image's natural dimensions if available
      const image = new Image();
      image.src = element.getAttribute('href');

      image.onload = () => {
        const item = {
          src: image.src,
          w: image.naturalWidth,
          h: image.naturalHeight,
          title: img.alt || '',
          msrc: img.src, // Use the thumbnail src
          el: element // Store the element reference
        };

        items.push(item);
      };
    });

    return items;
  }

  getCost() {
    let params = {
      url: 'cost/' + this.resortId,
    }
    this.request.getRequest(params).then((res: any) => {
      this.cost = res[0].cost;
    })
  }

  getLifts() {
    let params = {
      url: 'lifts/' + this.resortId,
    }
    this.request.getRequest(params).then((res: any) => {
      this.lifts = res;
    })
  }

  changeVisitors(type: string) {
    if (type === 'add' && this.visitors < 8) {
      this.visitors += 1;
    } else if (type === 'remove' && this.visitors > 1) {
      this.visitors -= 1;
    }
  }

  sendBooking() {
    let params = {
      url: 'booking',
      data: {
        resortId: this.resortId,
        visitors: this.visitors,
        cost: this.cost
      }
    }
    this.request.postRequest(params).then((res: any) => {
      console.log(res)
    })
  }
}
