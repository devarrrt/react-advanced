
export interface AuthState {
    isAuth: boolean,
    user: null |  IUser,
    isLoading: boolean,
    error: string
}

export interface IUser {
    username: string,
    password: string
}