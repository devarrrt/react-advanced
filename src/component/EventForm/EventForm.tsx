import React from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from "antd";

import { rules } from '../../utils/rulesField'
import { IUser } from '../../store/ducks/auth/types';

interface IEventForm {
    quests: IUser[]
}

const EventForm: React.FC<IEventForm> = ({ quests }) => {

    const submitForm = (data: any) => {
        console.log(data);
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date">
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}>
                <Select>
                    {quests.map(quest => (
                        <Select.Option value={quest.username}>
                            {quest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm
