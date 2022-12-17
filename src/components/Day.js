import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Day = ({ day, index }) => {
  const {DaySelected, setDaySelected, setShowEventModel} = useContext(GlobalContext);

  //   console.log(day);
  function currentDaycalss() {
    return day.format("DD-MM-YY") == dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flx flex-col">
      <header className="flex flex-col items-center">
        {index === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}

        <p className={`text-sm p-1 my-1 text-center ${currentDaycalss()}`}>{day.format("DD")}</p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModel(true);
        }}
      >
          {""}
      </div>
    </div>
  );
};

export default Day;
