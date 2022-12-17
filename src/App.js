import getMonth from "./util";
// import {getMonth} from "./util";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function App() {
  // console.table(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  // console.log(monthIndex);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <div className="h-screen flex flex-col">
      <CalendarHeader></CalendarHeader>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Month month={currentMonth}></Month>
      </div>
    </div>
  );
}

export default App;
