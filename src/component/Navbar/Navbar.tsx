import React from 'react'
import { Layout, Menu, Row } from 'antd'
import { MenuItem } from 'rc-menu'
import { useHistory } from 'react-router-dom'
import { RoutesName } from '../../routes'
import { useTypeSelector } from '../../store/ducks/auth/authSelectors'


interface INavbar { }

const Navbar: React.FC<INavbar> = () => {
    const router = useHistory()
    const { isAuth } = useTypeSelector(state => state.auth)

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>
                            devarrrt
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <MenuItem
                                key={1}
                                onClick={() => console.log('logout')}
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
