import React from 'react'
import { Event, Login } from '../pages'

export interface IRoute {
    path: string,
    component: React.ComponentType
    exact?: boolean
}

export enum RoutesName  {
    LOGIN= '/login',
    EVENT= '/'
}

export const publicRoutes: IRoute[] = [
    { path:RoutesName.LOGIN, exact: true, component: Login  }
]
export const privateRoutes: IRoute[] = [
   { path:RoutesName.EVENT, exact: true, component: Event  }
]