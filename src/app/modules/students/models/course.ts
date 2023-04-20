import { Class } from "./class";
import { User } from "./user";

export interface Course{
    id: number;
    name: string;
    capacity: number;
    teachers: number[];
    students: number[];
    classes: Class[];
    startDate: Date;
    endDate: Date;
}