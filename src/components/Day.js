import React from 'react';

const Day = ({day}) => {
    console.log(day)
    return (
        <div>
            <h3>{day.format()}</h3>
        </div>
    );
};

export default Day;