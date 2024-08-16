import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared.module';

const components = [
    NavbarComponent,
    CardComponent
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ]
})

export class ComponentsModule { }
