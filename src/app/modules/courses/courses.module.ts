import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesFilterPanelComponent, CoursesListComponent } from './components';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CoursesFilterPanelComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
