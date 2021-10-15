import { AuthActions, AuthActionsType } from "./authAction"
import { AuthState, IUser } from "./types"

const initialState: AuthState = {
isAuth: false,
user: { } as IUser,
isLoading: false,
error: ''
}

const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch( action.type ) {
        case AuthActionsType.SET_AUTH:
        return {
           ...state,
             isLoading: false,
            isAuth: action.payload
        }
        case AuthActionsType.SET_USER: 
        return{
            ...state,
            user: action.payload,
        }
        case AuthActionsType.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case AuthActionsType.SET_LOADING: 
        return{
            ...state,
            isLoading: action.payload
        }

        default: 
        return state
        }
}

export default authReducer