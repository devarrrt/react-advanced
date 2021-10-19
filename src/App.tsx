import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './component'
import { privateRoutes, publicRoutes, RoutesName } from './routes'
import { useTypeSelector } from './store/ducks/auth/authSelectors'

import './index.css';
import { useDispatch } from 'react-redux'
import { setAuthAction, setUserAction } from './store/ducks/auth/authAction'
import { IUser } from './store/ducks/auth/types'
const App = () => {
    const { isAuth } = useTypeSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(()=> {
        if ( localStorage.getItem('auth')) {
            dispatch(setAuthAction(true))
            dispatch(setUserAction({ username: localStorage.getItem('username' || "")} as IUser))
        }
    }, [])

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                {isAuth ?
                    <Switch>
                        {privateRoutes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component} />
                        ))}
                        <Redirect to={RoutesName.EVENT} />
                    </Switch>
                    :
                    <Switch>
                        {publicRoutes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component} />
                        ))}
                        <Redirect to={RoutesName.LOGIN} />
                    </Switch>
                }
            </Layout.Content>
        </Layout>
    )
}

export default App
