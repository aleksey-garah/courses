import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CourseDetailsRoutingModule } from './course-details-routing.module';



@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    SharedModule,
    CourseDetailsRoutingModule
  ]
})
export class CourseDetailsModule { }
