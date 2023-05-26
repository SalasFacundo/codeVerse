import { Action } from "@ngrx/store";
import { User } from "./models/user";
import { AGREGAR, ELIMINAR, MODIFICAR } from "./student.actions"

export function studentReducer( state: User, action: Action){

  switch(action.type){

    case AGREGAR:
        console.log("agregar")
        return null;
    case ELIMINAR:
      console.log("eliminar")
        return null;
    case MODIFICAR:
      console.log("modificar")
        return null;
    default:
      return state;
  }
}
