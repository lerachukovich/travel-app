import React, {useState, useEffect} from 'react';

const TimeDate = (props) => {

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

    return (
        <div>
            <p> Time in {props.value.capital_en}</p>
            <p>
                {date.toLocaleTimeString(props.value.locale, {timeZone: props.value.timezone})}
            </p>
            <p> {weekdays[date.getDay()]}, {date.getDate()} {month[date.getMonth()]}</p>
        </div>
    )
}

export default TimeDate;
