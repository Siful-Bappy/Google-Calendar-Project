import dayjs from "dayjs";
import React, { useState } from "react";
import getMonth from "../util.js";
import "./SmallCalendar.css";

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // console.log(currentMonth);
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <button>
          <span className="material-symbols-outlined cursor-pointer text-gray-600 ">
            chevron_left
          </span>
        </button>
        <button>
          <span className="material-symbols-outlined cursor-pointer text-gray-600 ">
            chevron_right
          </span>
        </button>
      </header>
    </div>
  );
};

export default SmallCalendar;
