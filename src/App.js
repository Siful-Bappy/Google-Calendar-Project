import getMonth from "./util";
// import {getMonth} from "./util";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import EventModel from "./components/EventModel";

function App() {
  const {monthIndex, showEventModel, setShowEventModel} = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <div className="h-screen flex flex-col">
      { showEventModel && <EventModel></EventModel>}
      <CalendarHeader></CalendarHeader>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Month month={currentMonth}></Month>
      </div>
    </div>
  );
}

export default App;
