import React from 'react'
import { Card, Layout, Row } from 'antd'
import { LoginForm } from '../../component'

interface ILogin { }

const Login: React.FC<ILogin> = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    )
}

export default Login
