import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from "antd";

import { rules } from '../../utils/rulesField'
import { IUser } from '../../store/ducks/auth/types';
import { IEvent } from '../../store/ducks/event/types';
import { Moment } from 'moment';
import { formatDate } from '../../utils/date';
import { useTypeSelector } from '../../store/ducks/auth/authSelectors';

interface IEventForm {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: React.FC<IEventForm> = ({ guests, submit }) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent);
    const { user } = useTypeSelector(state => state.auth)

    const submitForm = () => {
    //@ts-ignore
        submit({ ...event, author: user.username })
    }

    const selectDate = (date: Moment | null) => {
        if ( date ) {
            setEvent({ ...event, date: formatDate(date.toDate())})
        }
     }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}>
                <Input 
                value={event.description}
                onChange={ (e) => setEvent({ ...event, description: e.target.value }) }
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required(), rules.isDateAfter("Нельзя создать событие в прошлом")]}
                >
                <DatePicker 
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}>
                <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
                    {guests.map(quest => (
                        <Select.Option value={quest.username} key={quest.password} >
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