import getMonth from "./util";
// import {getMonth} from "./util";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { useState } from "react";

function App() {
  // console.table(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // console.log(currentMonth);
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
