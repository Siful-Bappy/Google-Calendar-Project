import React from 'react';
import Day from './Day';
// import Day2 from './Day2';

const Month = ({month}) => {
    // console.log(month)
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5'>
            {
                month.map((row, index) => {
                    return row.map(day => {
                        return <Day day={day} index={index}></Day>
                    })
                })
            }
        </div>
    );
};

export default Month;