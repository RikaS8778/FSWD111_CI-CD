import './Timer.css';
import { useState, useEffect } from 'react';

const Timer = () => {

    const getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
    }

    const [times, setTimes] = useState(getTime);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimes(getTime)
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='Timer'>
            <p>{times}</p>
        </div>
    )
}

export default Timer;