import { IUser } from "../auth/types";

export interface IEvent {
    author: string,
    quest: string,
    date: string,
    description: string 
}

export interface EventState {
    events: IEvent[],
    quests: IUser[]
}