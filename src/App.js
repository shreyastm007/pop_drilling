import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App(props) {
  let userName = "Shreyas";
  let [data, setData] = useState("avi");
  return (
    <div className="App">
      <h1>{data}</h1>
      <ComponentA userName={userName} setData={setData} />
    </div>
  );
}

export default App;
