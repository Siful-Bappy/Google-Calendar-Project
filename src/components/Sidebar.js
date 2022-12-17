import React from 'react';
import CreateEvent from './CreateEvent';

const Sidebar = () => {
    return (
        <aside className='border p-5 w-64'>
            <CreateEvent></CreateEvent>
        </aside>
    );
};

export default Sidebar;