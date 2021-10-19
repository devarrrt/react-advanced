import { IUser } from './../auth/types';
import { Action } from 'redux';
import { IEvent } from "./types";
import { AppDispatch } from '../../store';
import axios from 'axios';
import UserService from '../../../API/UserService';


export enum EventsActionsType {
    SET_EVENTS = "SET_EVENTS",
    SET_QUESTS = "SET_QUESTS"
}


export interface setEventsAI extends Action <EventsActionsType> {
  type: EventsActionsType.SET_EVENTS,
  payload: IEvent[]
}
export const setEventsAction = (data: IEvent[]): setEventsAI => ({
    type: EventsActionsType.SET_EVENTS,
    payload: data
})

export interface setQuestsAI extends Action <EventsActionsType> {
  type: EventsActionsType.SET_QUESTS,
    payload: IUser[] 
}
export const setQuestsAction = (data: IUser[]): setQuestsAI => ({
    type: EventsActionsType.SET_QUESTS,
    payload: data
})
 
export type EventActions = setEventsAI | setQuestsAI

export const fetchGuests = ( ) => async(dispatch: AppDispatch) => {
  try {
    const data = await UserService.getUsers()
    dispatch(setQuestsAction(data.data))
  } catch (e) {
    console.log(e)
  
  }
}