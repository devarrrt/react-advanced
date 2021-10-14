import { Action } from "redux"

export enum AuthActionsType {
    SET_AUTH = 'SET_AUTH'
}


export interface setAuthActionsAI extends Action<AuthActionsType> {
     type: AuthActionsType.SET_AUTH,
     payload: boolean
}
export const setAuthActions = (payload: boolean) => ({
       type: AuthActionsType.SET_AUTH,
       payload
})


export type AuthActions = setAuthActionsAI