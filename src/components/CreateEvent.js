import React from 'react';
import plusImg from "../assets/plus.svg"

const CreateEvent = () => {
    return (
        <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
            <img src={plusImg} alt="" className='w-7 h-7'/>
            <span className='pl-3 pr-7'>Create</span>
        </button>
    );
};

export default CreateEvent;