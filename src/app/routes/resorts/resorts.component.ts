import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { resorts } from 'src/assets/resorts';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.less']
})
export class ResortsComponent {
  data: any;

  constructor(private request: RequestService) { }

  ngOnInit() {
    console.log(this.data)
    this.request.getRequest({ url: 'SnowResorts' }).then((data: any) => {
      this.data = data;
      console.log(data)
    })
}
}
