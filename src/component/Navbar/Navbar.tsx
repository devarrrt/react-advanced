import React from 'react'
import { Layout, Menu, Row } from 'antd'
import { MenuItem } from 'rc-menu'
import { useHistory } from 'react-router-dom'
import { RoutesName } from '../../routes'
import { useTypeSelector } from '../../store/ducks/auth/authSelectors'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../store/ducks/auth/authAction'


interface INavbar { }

const Navbar: React.FC<INavbar> = () => {
    const router = useHistory()
    const { isAuth, user } = useTypeSelector(state => state.auth)
    const dispatch = useDispatch()

    const logout = () => {
        if (window.confirm('Хотите выйти') ) {
            dispatch(logoutAction())
        }
    }

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>
                            {user?.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <MenuItem
                                key={1}
                                onClick={logout}
                            > Logout </MenuItem>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <MenuItem
                            key={2}
                            onClick={() => router.push(RoutesName.LOGIN)}
                        > Login </MenuItem>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    )
}

export default Navbar
