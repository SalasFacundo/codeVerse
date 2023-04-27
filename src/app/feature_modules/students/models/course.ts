import { Time } from "@angular/common";
import { Class } from "./class";
import { User } from "./user";

export interface Course{
    id: number;
    name: string;
    capacity: number;
    teachers: number[];
    students: number[];
    classes: Class[];
    price: number;
    startDate: Date;
    endDate: Date;
    startHour: string;
    endHour: string;
}
