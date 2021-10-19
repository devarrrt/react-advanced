import { combineReducers } from 'redux';
import authReducer from "./ducks/auth/authReducer";
import eventReducer from './ducks/event/eventReducer'

export const rootReducer = combineReducers ({
    auth: authReducer,
    event: eventReducer
})