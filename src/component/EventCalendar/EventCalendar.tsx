import { Calendar } from 'antd'
import { Moment } from 'moment'
import React from 'react'
import { IEvent } from '../../store/ducks/event/types'
import { formatDate } from '../../utils/date'

interface IEventCalendar {
    events: IEvent[]
}

const EventCalendar: React.FC<IEventCalendar> = ({ events }) => {

    const dateCellRender = (value: Moment) => {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = events.filter(e => e.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((e, index) =>
                    <div key={index}> {e.description} </div>
                )}
            </div>
        )
    }

    return (
        <div>
            <Calendar dateCellRender={dateCellRender}/>
        </div>
    )
}

export default EventCalendar
