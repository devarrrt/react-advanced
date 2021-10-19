import { Calendar } from 'antd'
import React from 'react'
import { IEvent } from '../../store/ducks/event/types'


interface IEventCalendar {
    events: IEvent[]
}

const EventCalendar: React.FC<IEventCalendar> = () => {
    return (
        <div>
            <Calendar/>
        </div>
    )
}

export default EventCalendar
