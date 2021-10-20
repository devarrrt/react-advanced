import { EventActions, EventsActionsType } from './eventActions';
import { EventState } from "./types"

const initialState: EventState = {
    events: [],
    guests: []
}

const eventReducer = ( state = initialState, action: EventActions ): EventState => {
    switch(action.type) {
        case EventsActionsType.SET_EVENTS:
        return{
            ...state,
            events: action.payload
        }
        case EventsActionsType.SET_GUESTS:
        return{
            ...state,
         guests: action.payload   
        }
        default: return state

    }
}

export default eventReducer