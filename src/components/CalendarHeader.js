import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import "./CalendarHeader.css"

const CalendarHeader = () => {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  console.log(monthIndex)
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1)
    // console.log("Button has been clicked");
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }

  return (
    <div className="px-x py-2 flex items-center">
      <img src={logo} alt="Calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2 ">chevron_left</span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">chevron_right</span>
      </button>
    </div>
  );
};

export default CalendarHeader;
