import { IUser } from "../auth/types";

export interface IEvent {
    author: string;
    guest: string;
    date: string;
    description: string;
}

export interface EventState {
    events: IEvent[],
    guests: IUser[]
}
