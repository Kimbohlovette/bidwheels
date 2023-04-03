import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
    return (
        <div className={isDanger ? 'countdown danger items-center justify-center' : 'countdown items-center justify-center'}>
            <p className={isDanger ? 'text-red-600 font-bold text-xl text-center' : 'text-primary font-bold text-xl text-center'}>{value}</p>
            <span className="text-primary font-light text-xs">{type}</span>
        </div>
    );
};

export default DateTimeDisplay;
