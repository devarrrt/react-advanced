import { IUser } from "./types";
import { Action } from "redux";
import axios from "axios";

export enum AuthActionsType {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

export interface setAuthAI extends Action<AuthActionsType> {
  type: AuthActionsType.SET_AUTH;
  payload: boolean;
}
export const setAuthAction = (payload: boolean) => ({
  type: AuthActionsType.SET_AUTH,
  payload,
});

export interface setUserAI extends Action<AuthActionsType> {
  type: AuthActionsType.SET_USER;
  payload: IUser;
}
export const setUserAction = (payload: IUser) => ({
  type: AuthActionsType.SET_USER,
  payload,
});

export interface setLoadingAI extends Action<AuthActionsType> {
  type: AuthActionsType.SET_LOADING;
  payload: boolean;
}
export const setLoadingAcrion = (payload: boolean) => ({
  type: AuthActionsType.SET_LOADING,
  payload,
});

export interface setErrorAI extends Action<AuthActionsType> {
  type: AuthActionsType.SET_ERROR;
  payload: string;
}
export const setErrorAction = (payload: string) => ({
  type: AuthActionsType.SET_ERROR,
  payload,
});

export type AuthActions = setAuthAI | setUserAI | setLoadingAI | setErrorAI;

export const loginAction = (username: string, password: string) => async(dispatch: any) => {
    try {
        setTimeout(async() => {
            dispatch(setLoadingAcrion(true)) 
        const response = await axios.get<IUser[]>('./users.json')
        const data = response.data.find( user => user.username === username && user.password === password )
        if ( data ) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', data.username)
            dispatch(setAuthAction(true))
            dispatch(setUserAction(data))
        } else {
            dispatch(setErrorAction("Неверный логин или пароль"))
        }
        dispatch(setLoadingAcrion(false))
        }, 1000);
    } catch(e) { 
            dispatch(setErrorAction('Произошла ошибка при логине'))
        
    } finally{
            dispatch(setLoadingAcrion(false))
    }
}

export const logoutAction = () => async(dispatch:any) => {
    try{
      localStorage.removeItem("auth")
      localStorage.removeItem("username")
       dispatch(setAuthAction(false))
       dispatch(setUserAction({} as IUser))
    }catch {

    }finally{

    }
}