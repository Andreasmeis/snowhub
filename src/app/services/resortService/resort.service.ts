import { Injectable } from '@angular/core';
import { RequestService } from '../requestService/request.service';

@Injectable({
  providedIn: 'root'
})
export class ResortService {
  allResorts: any;
  activeResort: any;

  constructor(private request: RequestService) { }

  getAllResorts() {
    return this.request.getRequest({ url: 'SnowResorts' }).then((data: any) => {
      this.allResorts = data;
      return data;
    })
  }

  getActiveResort(resortId: string) {
    this.activeResort = this.allResorts.find((item: any) => item.id == resortId)
    return this.activeResort
  }
}
