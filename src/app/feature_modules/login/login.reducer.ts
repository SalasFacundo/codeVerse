import { createReducer, on } from '@ngrx/store';
import { login, logout } from './login.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(logout, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }))
);
