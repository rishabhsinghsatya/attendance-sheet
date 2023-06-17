import React from "react";
import { useState } from "react";

import students2 from "../students2.json";
import Header from "./Header";

const list2year = (props) => {
  const [present, setPresent] = useState([]);
  return (
    <>
      <div className="full-fourth-page">
        <Header today={props.today} />
        <div className="list-heading">
          <p>Roll.No</p>
          <p>Name</p>

          <p className="present">Present</p>
          <p className="absent">Absent</p>
        </div>
        <div className="list-container">
          {students2.map((student) => (
            <div className="name-roll">
              <p>{student.roll_no}</p>
              <h3 className="studentname">{student.name}</h3>
              <button
                className="present"
                onClick={() => setPresent([...present, student.name])}
              >
                present
              </button>
              <button className="absent">Absent</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default list2year;
