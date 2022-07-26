import { IStudent } from "./student.model";

export interface ILesson {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  students: IStudent[];
}
