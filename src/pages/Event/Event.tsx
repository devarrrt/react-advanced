import { Button, Layout, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { EventForm } from '../../component';
import EventCalendar from '../../component/EventCalendar/EventCalendar'
import { useTypeSelector } from '../../store/ducks/auth/authSelectors';
import { fetchGuests } from '../../store/ducks/event/eventActions';

interface IEvent { }

const Event: React.FC<IEvent> = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { events, quests } = useTypeSelector(state => state.event)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGuests())
    }, [dispatch])

    return (
        <Layout>
            <EventCalendar events={[]} />
            <Row justify="center" style={{ margin: 40 }}>
                <Button onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
            </Row>
            <Modal title="Добавить событие"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}>
                <EventForm quests={quests} />
            </Modal>
        </Layout>
    )
}

export default Event
