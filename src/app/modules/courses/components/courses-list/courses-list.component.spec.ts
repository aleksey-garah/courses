import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CourseStatus, FilterPanelModel } from '../../../../models';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.coursesData = [
      {
        id: 1,
        name: 'Fundamentals of Credit',
        imageUrl: 'https://picsum.photos/100/100',
        status: CourseStatus.DRAFT,
        instructors: [
          {
            name: '"Roli Jain',
            image: 'https://picsum.photos/300/300'
          },
          {
            name: 'Sebastian Taylor',
            image: 'https://picsum.photos/300/300'
          }
        ]
      },
      {
        id: 2,
        name: 'Accounting Fundamentals',
        imageUrl: 'https://picsum.photos/100/100',
        status: CourseStatus.PUBLISHED,
        instructors: [
          {
            name: 'Roli Jain',
            image: 'https://picsum.photos/300/300'
          }
        ]
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter courses by status DRAFT', () => {
    const status = CourseStatus.DRAFT;
    const testFiltersData: FilterPanelModel = {
      searchText: '',
      status
    };

    component.onFiltersChanged(testFiltersData);

    const isAllFilteredCoursesDraft = component.filteredCourses.reduce((acc, curr) => {
      return acc && curr.status === status;
    }, true);
    expect(isAllFilteredCoursesDraft).toBeTrue();
  });

  it('should filter courses by search text', () => {
    const searchText = 'Credit';
    const testFiltersData: FilterPanelModel = {
      searchText,
      status: ''
    };

    component.onFiltersChanged(testFiltersData);

    const isAllFilteredCoursesContainsText = component.filteredCourses.reduce((acc, curr) => {
      return acc && ((curr.name.toLowerCase().indexOf(searchText) !== -1)
        || (curr.instructors.findIndex((instructor) => instructor.name.toLowerCase().indexOf(searchText) !== -1) !== -1));
    }, true);
    expect(isAllFilteredCoursesContainsText).toBeTrue();
  });

  it('should filter courses by search text and status', () => {
    const searchText = 'Credit';
    const status = CourseStatus.DRAFT;
    const testFiltersData: FilterPanelModel = {
      searchText,
      status
    };

    component.onFiltersChanged(testFiltersData);

    const isAllFilteredCoursesContainsText = component.filteredCourses.reduce((acc, curr) => {
      return acc && curr.status === status && ((curr.name.toLowerCase().indexOf(searchText) !== -1)
        || (curr.instructors.findIndex((instructor) => instructor.name.toLowerCase().indexOf(searchText) !== -1) !== -1));
    }, true);
    expect(isAllFilteredCoursesContainsText).toBeTrue();
  });

  it('should not find any elements', () => {
    const searchText = 'ASDFGasdasdooo';
    const status = CourseStatus.DRAFT;
    const testFiltersData: FilterPanelModel = {
      searchText,
      status
    };

    component.onFiltersChanged(testFiltersData);

    expect(component.filteredCourses.length).toEqual(0);
  });

  it('should display not filtered list', () => {
    const searchText = '';
    const status = '';
    const testFiltersData: FilterPanelModel = {
      searchText,
      status
    };

    component.onFiltersChanged(testFiltersData);

    expect(component.filteredCourses.length).toEqual(component.coursesData.length);
  });
});
