import { User } from "./user";

export interface Student extends User{
    id: number;
    dni: number;
    name: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
}
