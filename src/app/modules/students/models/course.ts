import { User } from "./user";

export interface Course{
    id: number;
    name: string;
    capacity: number;
    teachers: User[];
    students: User[];
    startDate: Date;
    endDate: Date;
}