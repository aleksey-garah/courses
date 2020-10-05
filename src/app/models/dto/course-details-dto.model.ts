import {CourseInstructorDtoModel} from './course-instructor-dto.model';
import {CourseStatus} from '../course-status';

export class CourseDetailsDtoModel {
  id: number;
  name: string;
  images: string[];
  status: CourseStatus;
  instructors: CourseInstructorDtoModel[];
}
