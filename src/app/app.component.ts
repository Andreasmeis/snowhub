import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from './services/requestService/request.service';
import { ResortService } from './services/resortService/resort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'snowhub';
  flag = false;
  
  constructor(public dialog: MatDialog, private request: RequestService, private resortService: ResortService) {}

  ngOnInit() {
    this.request.token = localStorage.getItem('token');
    this.resortService.getAllResorts().then(() => this.flag = true)
  }
}
