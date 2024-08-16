import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.modules';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

const sharedModules = [
  MaterialModule,
  ReactiveFormsModule,
  BrowserModule,
  CommonModule,
  DragDropModule,
  FormsModule
]

@NgModule({
    imports: [
      HttpClientModule,
      MaterialModule,
      
      ReactiveFormsModule,
      CommonModule,
      FormsModule,
    ],
    declarations: [
    ],
    exports: [
      sharedModules
    ]
  })
  
  export class SharedModule { }
