import React, {useState, useEffect} from 'react';
import { dictionary } from '../../data/dictionary';
import './TimeDateWidget.scss'


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
        <div className='card text-white bg-primary mb-3 time-widget'>
            <div className='card-body'>
                <h4 className='card-title'> {dictionary[language]['time-in']} {props.value[`capital_${language}`]}</h4>
                <h1 className='card-header country-time'>
                    {date.toLocaleTimeString(props.value.locale, {timeZone: props.value.timezone})}
                </h1>
                <p className='country-date'> {dictionary[language][currentWeekDay]}, {date.getDate()} {dictionary[language][currentMonth]}</p>
            </div>
        </div>
    )
}

export default TimeDate;
