import React, { useState } from 'react'
import { Button, Form, Input } from "antd";
import {rules} from '../../utils/rulesField'

interface ILoginForm { }


const LoginForm: React.FC<ILoginForm> = () => {
    const [username, setUsername] = useState("")
    const [passwword, setPasswword] = useState("")

    const onSubmit = (data: any) => {
        console.log(data);
    }   

    return (
        <Form onFinish={onSubmit}>
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Пожалуйста, введите имя пользователя") ]}
                >
                <Input 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required("Пожалуйста, введите пароль")]}
                >
                <Input value={passwword}
                    onChange={(e) => setPasswword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
