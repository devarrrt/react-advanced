import { combineReducers } from 'redux';
import authReducer from "./ducks/auth/authReducer";

export const rootReducer = combineReducers ({
    auth: authReducer
})