import { Action } from "@ngrx/store";

export const MODIFICAR = '[Student] Modificar';
export const AGREGAR = '[Student] Agregar';
export const ELIMINAR = '[Student] Eliminar';

export class ModificarAction implements Action{
  readonly type: string = MODIFICAR;
}
export class AgregarAction implements Action{
  readonly type: string = AGREGAR;
}
export class EliminarAction implements Action{
  readonly type: string = ELIMINAR;
}
