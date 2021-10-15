import React, { useState } from 'react'
import { Button, Form, Input } from "antd";
import { rules } from '../../utils/rulesField'
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/ducks/auth/authAction';
import { useTypeSelector } from '../../store/ducks/auth/authSelectors';

interface ILoginForm { }


const LoginForm: React.FC<ILoginForm> = () => {
    const [username, setUsername] = useState("")
    const [passwword, setPasswword] = useState("")
    const dispatch = useDispatch()
    const { error, isLoading } = useTypeSelector(state => state.auth)

    const onSubmit = (data: any) => {
        dispatch(loginAction(username, passwword))
        setUsername("")
        setPasswword("")
    }

    return (
        <Form onFinish={onSubmit}>
            {error && (
                <div style={{ color: 'red' }}>
                    {error}
                </div>
            )}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Пожалуйста, введите имя пользователя")]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required("Пожалуйста, введите пароль")]}
            >
                <Input
                    type="password"
                    value={passwword}
                    onChange={(e) => setPasswword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    {isLoading ? "Подождите..." : "Войти"}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
