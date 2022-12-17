import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext.js";
import getMonth from "../util.js";
import "./SmallCalendar.css";

const SmallCalendar = () => {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(
        dayjs().month()
      );
      const [currentMonth, setCurrentMonth] = useState(getMonth());
      useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
      }, [currentMonthIdx]);

    const {monthIndex} = useContext(GlobalContext);
    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
            "MMMM YYYY"
          )}
        </p>
        <button onClick={handlePrevMonth}>
          <span className="material-symbols-outlined cursor-pointer text-gray-600 ">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-symbols-outlined cursor-pointer text-gray-600 ">
            chevron_right
          </span>
        </button>
      </header>
    </div>
  );
};

export default SmallCalendar;
