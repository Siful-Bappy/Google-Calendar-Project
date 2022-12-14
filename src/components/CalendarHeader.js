import React from 'react';
import logo from "../assets/logo.png"

const CalendarHeader = () => {
    return (
        <div className='px-x py-2 flex items-center'>
            <img src={logo} alt="Calendar"className='mr-2 w-12 h-12' />
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
        </div>
    );
};

export default CalendarHeader;