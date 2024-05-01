import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ResortComponent } from './resort/resort.component';
import { SwiperModule } from 'swiper/angular';

const routesComponents = [
    HomeComponent,
    ResortsComponent,
    ResortComponent
];

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    SwiperModule
  ],
  declarations: [
    ...routesComponents
  ],
  exports: [
    ...routesComponents
  ]
})
export class RoutesModule { }
