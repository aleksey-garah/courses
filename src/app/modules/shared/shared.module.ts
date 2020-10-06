import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';

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
    RouterModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    SHARED_COMPONENTS,
    SHARED_PIPES,
    NgxBootstrapModule
  ]
})
export class SharedModule { }
