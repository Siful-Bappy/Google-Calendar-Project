import React from 'react';
import CreateEvent from './CreateEvent';
import SmallCalendar from './SmallCalendar';

const Sidebar = () => {
    return (
        <aside className='border p-5 w-64'>
            <CreateEvent></CreateEvent>
            <SmallCalendar></SmallCalendar>
        </aside>
    );
};

export default Sidebar;