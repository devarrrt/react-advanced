import { Button, Layout, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { EventForm } from '../../component';
import EventCalendar from '../../component/EventCalendar/EventCalendar'
import { useTypeSelector } from '../../store/ducks/auth/authSelectors';
import { createEvent, fetchEvents, fetchGuests } from '../../store/ducks/event/eventActions';
import { IEvent } from '../../store/ducks/event/types';


const Event: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { events, guests } = useTypeSelector(state => state.event)
    const { user } = useTypeSelector( state => state.auth )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGuests())
        //@ts-ignore
        dispatch(fetchEvents(user.username))
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        dispatch(createEvent(event))
    }

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center" style={{ margin: 40 }}>
                <Button onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
            </Row>
            <Modal title="Добавить событие"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}>
                <EventForm
                    guests={guests}
                    submit={addNewEvent} />
            </Modal>
        </Layout>
    )
}

export default Event
