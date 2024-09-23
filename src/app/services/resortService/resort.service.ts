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

  getLifts(resortId: string) {
    let params = {
      url: 'lifts/' + resortId,
    }
    return this.request.getRequest(params).then(res => res)
  }

  getCost(resortId: string) {
    let params = {
      url: 'cost/' + resortId,
    }
    return this.request.getRequest(params).then((res: any) => res[0].cost)
  }

  sendBooking(resortId: string, visitors: number, cost: number) {
    let params = {
      url: 'booking',
      req: {
        snow_resort_id: resortId,
        number_pass: visitors,
        cost: cost
      }
    };

    // Call the postRequest method
    this.request.postRequest(params, true)
  }
}
