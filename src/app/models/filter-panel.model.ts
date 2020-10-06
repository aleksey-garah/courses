import { CourseStatus } from './course-status';

export class FilterPanelModel {
  status?: CourseStatus | string;
  searchText?: string;
}
