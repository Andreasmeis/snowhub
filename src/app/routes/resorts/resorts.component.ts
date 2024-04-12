import { Component } from '@angular/core';
import { resorts } from 'src/assets/resorts';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.less']
})
export class ResortsComponent {
data = resorts
}
