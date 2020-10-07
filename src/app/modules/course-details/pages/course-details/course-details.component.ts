import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../../shared/helpers';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CourseDetailsDtoModel } from '../../../../models';
import { CoursesHttpService } from '../../../core/http';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent extends BaseComponent implements OnInit {

  public courseDetails: CourseDetailsDtoModel;

  constructor(private route: ActivatedRoute, private coursesHttpService: CoursesHttpService) {
    super();
  }

  ngOnInit(): void {
    this.subscribeOnParams();
  }

  private subscribeOnParams() {
    this.route.params
      .pipe(
        takeUntil(this.destruct$),
        switchMap((params) => {
          const id = params ? params.id : 0;
          return this.coursesHttpService.getCourseById(id);
        })
      ).subscribe((courseDetails) => {
        this.courseDetails = courseDetails;
    })
  }
}
