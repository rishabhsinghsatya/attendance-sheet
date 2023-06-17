import React from "react";
import { useState } from "react";
import "./App.css";
import Firstpage from "./components/Firstpage";
import Firstyearlist from "./components/Firstyearlist";
import Firstyearpdf from "./components/Firstyearpdf";
import Thirdyearlist from "./components/Thirdyearlist";
import Thirdyearpdf from "./components/Thirdyearpdf";
import Secondyearpage from "./components/Secondyearlist";
import Secondyearpdf from "./components/Secondyearpdf";
import Fourthyearlist from "./components/Fourthyearlist";
import Fourthyearpdf from "./components/Fourthyearpdf";

function App() {
  const [page, setPage] = useState(1);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;
  // const x = today;

  return (
    <div className="App">
      {page === 1 ? <Firstpage setPage={setPage} /> : null}
      {page === 2 ? <Thirdyearlist today={today} setPage={setPage} /> : null}
      {/* <Firstpage /> */}
      {/* <Secondpage /> */}
      {page === 3 ? <Thirdyearpdf today={today} setPage={setPage} /> : null}
      {page === 4 ? <Secondyearpage today={today} setPage={setPage} /> : null}
      {page === 5 ? <Secondyearpdf today={today} setPage={setPage} /> : null}
      {page === 6 ? <Firstyearlist today={today} setPage={setPage} /> : null}
      {page === 7 ? <Firstyearpdf today={today} setPage={setPage} /> : null}
      {page === 8 ? <Fourthyearlist today={today} setPage={setPage} /> : null}
      {page === 9 ? <Fourthyearpdf today={today} setPage={setPage} /> : null}
    </div>
  );
}

export default App;
