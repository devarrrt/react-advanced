import { AuthActions, AuthActionsType } from "./authAction"
import { AuthState } from "./types"

const initialState: AuthState = {
isAuth: true
}

const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch( action.type ) {
        case AuthActionsType.SET_AUTH:
        return {
           ...state,
            isAuth: action.payload
        }


        default: 
        return state
        }
}

export default authReducer