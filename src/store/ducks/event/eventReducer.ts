import { EventActions, EventsActionsType } from './eventActions';
import { EventState } from "./types"


const initialState: EventState = {
    events: [],
    quests: []
}

const eventReducer = ( state = initialState, action: EventActions ): EventState => {
    switch(action.type) {
        case EventsActionsType.SET_EVENTS:
        return{
            ...state,
            events: action.payload
        }
        case EventsActionsType.SET_QUESTS:
        return{
            ...state,
         quests: action.payload   
        }
        default: return state

    }
}

export default eventReducer