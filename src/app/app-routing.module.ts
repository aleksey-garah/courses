import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'course-details/:id',
    loadChildren: () => import('./modules/course-details/course-details.module').then(m => m.CourseDetailsModule)
  },
  {
    path: '**',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
