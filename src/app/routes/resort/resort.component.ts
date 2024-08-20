import { Component, ViewEncapsulation } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import { SwiperOptions } from 'swiper';
import { ActivatedRoute } from '@angular/router';
import { Activities, ActivitiesIcons } from 'src/app/interfaces/resorts';
@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ResortComponent {
  resortId = this.route.snapshot.params['resortId'];
  images: any[] = [];
  resort: any = {};
  Activities: any = Activities;
  ActivitiesIcons: any = ActivitiesIcons;

  configImages: SwiperOptions = {
    slidesPerView: 4.5,
    spaceBetween: 30,
    navigation: true,
  };

  constructor(private request: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    let params = {
      url: 'SnowResorts'
    }
    this.request.getRequest(params).then((res: any) => {
      this.resort = res.find((item: any) => item.id == this.resortId)
    });
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
}
