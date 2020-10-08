import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CourseDtoModel, CourseStatus, FilterPanelModel} from '../../../../models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnChanges {

  @Input() public coursesData: CourseDtoModel[];

  public filteredCourses: CourseDtoModel[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.coursesData) {
      this.filteredCourses = changes.coursesData.currentValue || [];
    }
  }

  public onFiltersChanged(filtersData: FilterPanelModel): void {
    this.filteredCourses = this.filterCourses(this.coursesData, filtersData);
  }

  private filterCourses(courses: CourseDtoModel[], filtersData: FilterPanelModel): CourseDtoModel[] {
    return courses.filter((course) => {
      return this.isMatchedByStatus(course, filtersData.status) && this.isMatchedByText(course, filtersData.searchText);
    });
  }

  private isMatchedByStatus(course: CourseDtoModel, status: CourseStatus | string): boolean {
    return (!status || status === course.status);
  }

  private isMatchedByText(course: CourseDtoModel, searchText: string): boolean {
    return !searchText
      || (course.name.toLowerCase().indexOf(searchText) !== -1)
      || (course.instructors.findIndex((instructor) => instructor.name.toLowerCase().indexOf(searchText) !== -1) !== -1);
  }

}
