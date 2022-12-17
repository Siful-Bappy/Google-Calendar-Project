import React from 'react';
import dayjs from 'dayjs';

function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currnetMonthCount = 0 - firstDayOfTheMonth;
    const dayMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill([]).map(() => {
            currnetMonthCount++;
            return dayjs(new Date(year, month, currnetMonthCount))
        })
    })
    return dayMatrix;
}

export default getMonth;
