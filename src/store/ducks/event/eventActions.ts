import { AppDispatch } from './../../store';
import { IUser } from './../auth/types';
import { Action } from 'redux';
import { IEvent } from "./types";
import UserService from '../../../API/UserService';

export enum EventsActionsType {
    SET_EVENTS = "SET_EVENTS",
    SET_GUESTS = "SET_GUESTS"
}

export interface setEventsAI extends Action <EventsActionsType> {
  type: EventsActionsType.SET_EVENTS,
  payload: IEvent[]
}
export const setEventsAction = (data: IEvent[]): setEventsAI => ({
    type: EventsActionsType.SET_EVENTS,
    payload: data
})

export interface setGuestsAI extends Action <EventsActionsType> {
  type: EventsActionsType.SET_GUESTS,
    payload: IUser[] 
}
export const setGuestsAction = (data: IUser[]): setGuestsAI => ({
    type: EventsActionsType.SET_GUESTS,
    payload: data
})
 
export type EventActions = setEventsAI | setGuestsAI

export const fetchGuests = ( ) => async(dispatch: AppDispatch) => {
  try {
    const data = await UserService.getUsers()
    dispatch(setGuestsAction(data.data))
  } catch (e) {
    console.log(e)
  }
}

export const createEvent = (event: IEvent) => async( dispatch: AppDispatch ) => {
  try {
    const data = localStorage.getItem("events") || "[]"
    const json = JSON.parse(data) as IEvent[]
    json.push(event)
    dispatch( setEventsAction(json))
    localStorage.setItem('events', JSON.stringify(json))
  } catch(e) {
    console.log(e)
  }
}

export const fetchEvents = (username: string) => async(dispatch: AppDispatch) => {
  try {
    const data = localStorage.getItem("events") || '[]'
    const json = JSON.parse(data) as IEvent[]
    const currentUserEvents = json.filter( e => e.author === username || e.guest === username )
    dispatch( setEventsAction(currentUserEvents))
   } catch (e) {
    console.log(e)
  }
}
