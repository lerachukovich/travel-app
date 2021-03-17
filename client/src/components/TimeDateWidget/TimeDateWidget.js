import React, {useState, useEffect} from 'react';
import { dictionary } from '../../data/dictionary';


const TimeDate = (props) => {
    const {language} = props;

    const [date, setDate] = React.useState(new Date());
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    })

    const currentMonth = month[date.getMonth()];
    const currentWeekDay = weekdays[date.getDay()];

    return (
        <div className='time-widget'>
            <p> {dictionary[language]['time-in']} {props.value[`capital_${language}`]}</p>
            <p>
                {date.toLocaleTimeString(props.value.locale, {timeZone: props.value.timezone})}
            </p>
            <p> {dictionary[language][currentWeekDay]}, {date.getDate()} {dictionary[language][currentMonth]}</p>
        </div>
    )
}

export default TimeDate;
