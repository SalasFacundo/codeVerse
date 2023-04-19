import { Class } from "./class";
import { User } from "./user";

export interface Course{
    id: number;
    name: string;
    capacity: number;
    teachers: User[];
    students: User[];
    classes: Class[];
    startDate: Date;
    endDate: Date;
}