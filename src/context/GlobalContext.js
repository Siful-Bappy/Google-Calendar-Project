import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {
 
    },
    smallCalendarMonth: 0, 
    setSmallCalendarMonth: (index) => {

    },
    daySelected: null,
    setDaySelected: (index) => {},
    showEventModel: false,
    setShowEventModel: (index) => {}
})

export default GlobalContext;