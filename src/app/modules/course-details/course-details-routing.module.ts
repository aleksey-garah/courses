import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailsRoutingModule { }
