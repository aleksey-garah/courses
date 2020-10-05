import { CourseStatus } from '../course-status';
import { CourseInstructorDtoModel } from './course-instructor-dto.model';

export class CourseDtoModel {
  id: number;
  name: string;
  imageUrl: string;
  status: CourseStatus;
  instructors: CourseInstructorDtoModel[];
}
