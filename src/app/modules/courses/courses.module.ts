import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './components';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
