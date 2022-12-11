import getMonth from "./util";
// import {getMonth} from "./util";
import "./App.css";

function App() {
  console.table(getMonth());
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
