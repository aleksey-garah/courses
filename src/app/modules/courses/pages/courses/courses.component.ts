import { Component, OnInit } from '@angular/core';
import {CoursesHttpService} from "../../../core/http";
import {CourseDtoModel} from "../../../../models";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses$: Observable<CourseDtoModel[]>;

  constructor(private coursesHttpService: CoursesHttpService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesHttpService.getCourses();
  }

}
