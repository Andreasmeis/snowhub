import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ResortsComponent } from './resorts/resorts.component';

const routesComponents = [
    HomeComponent,
    ResortsComponent
];

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule
  ],
  declarations: [
    ...routesComponents
  ],
  exports: [
    ...routesComponents
  ]
})
export class RoutesModule { }
