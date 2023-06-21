import { Time } from "@angular/common";
import { Class } from "./class";
import { User } from "./user";

export interface Course{
    id: number;
    name: string;
    description: string;
    capacity: number;
    teacherId: number;
    classesId: number[];
    price: number;
    startDate: Date;
    endDate: Date;
    startHour: string;
    endHour: string;
}
