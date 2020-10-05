import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const SHARED_COMPONENTS = [];

const SHARED_PIPES = [];

@NgModule({
  declarations: [
    SHARED_COMPONENTS,
    SHARED_PIPES
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SHARED_COMPONENTS,
    SHARED_PIPES
  ]
})
export class SharedModule { }
