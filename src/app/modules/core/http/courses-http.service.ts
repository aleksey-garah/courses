import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../../config';
import { CourseDetailsDtoModel, CourseDtoModel } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {

  constructor(private http: HttpClient, private appConfig: AppConfigService) { }

  public getCourses(): Observable<CourseDtoModel[]> {
    return this.http.get<CourseDtoModel[]>(`${this.appConfig.apiUrl}/courses`);
  }

  public getCourseById(courseId: number): Observable<CourseDetailsDtoModel> {
    return this.http.get<CourseDetailsDtoModel>(`${this.appConfig.apiUrl}/courses/${courseId}`);
  }
}
