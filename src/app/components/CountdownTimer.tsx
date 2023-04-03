import React from 'react';
import { useCountdown } from './useCountDown';
import DateTimeDisplay from './DateTimeDisplay';


const CountdownTimer = ({ targetDate }: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
        <div className="flex items-center gap-x-5">
            <a
                href="/"
                rel="noopener noreferrer"
                className="flex flex-row gap-x-4"
            >
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p className={days <= 3 ? 'text-red-600 font-bold text-3xl' : 'text-primary font-bold text-3xl'}>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={days <= 3} />
                <p className={days <= 3 ? 'text-red-600 font-bold text-3xl' : 'text-primary font-bold text-3xl'}>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={days <= 3} />
                <p className={days <= 3 ? 'text-red-600 font-bold text-3xl' : 'text-primary font-bold text-3xl'}>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={days <= 3} />
            </a>
            <p className={'text-red-700 font-bold text-lg'}>Until bidding ends</p>
        </div>
    );
};

export default CountdownTimer;