import React, { useContext, useState } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";

const CreateEvent = () => {
  const { showEventModel, setShowEventModel } = useContext(GlobalContext);
  const [click, setClick] = useState(false);
  
  return (
    <div>
      <button
        onClick={() => setShowEventModel(!showEventModel)}
        className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      >
        <img src={plusImg} alt="" className="w-7 h-7" />
        <span className="pl-3 pr-7">Create</span>
      </button>
      {/* <button
        onClick={() => setClick(!click)}
        className="rounded border-red-700 p-5 hover:text-red-700"
      >
        {click ? "Remove" : "Click"}
      </button> */}
    </div>
  );
};

export default CreateEvent;
