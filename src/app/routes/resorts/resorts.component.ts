import { Component } from '@angular/core';
import { ResortService } from 'src/app/services/resortService/resort.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.less']
})
export class ResortsComponent {
  allResorts: any;

  constructor(private resort: ResortService) { }

  ngOnInit() {
    this.allResorts = this.resort.allResorts;
}
}
