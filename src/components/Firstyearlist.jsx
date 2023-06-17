import React from "react";
import Backicon from "../icons/Back.svg";
import Forwardicon from "../icons/Forward.svg";
import students1 from "../students1.json";
import Header from "./Header";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";

const Secondyearlist = (props) => {
  const [present, setPresent] = useState([]);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;
  const addFirstAttendance = async () => {
    await setDoc(doc(db, "First year", today), {
      id: today,
      presentStudents: present,
    });
  };
  return (
    // <>
      <div className="second-year-list">
        {/* <Header today={props.today} /> */}
        <div className="date-heading">
          <h3 className="date">Date: {props.today}</h3>
          <p className="header-heading">Attendance 1st year B.tech (CSE)</p>
        </div>
        <div className="list-heading">
          <p>Roll.No</p>
          <p>Name</p>

          <p className="presentheading">Present</p>
          <p className="absentheading">Absent</p>
        </div>
        <div className="list-container">
          {students1.map((student) => (
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
        <div className="secondyear-base">
          <div className="button-container">
            <div className="back-btn">
              <img
                src={Backicon}
                alt="back icon"
                onClick={() => props.setPage(1)}
              />
            </div>
            <button
              type="submit"
              className="footer"
              onClick={() => {
                props.setPage(7);
                addFirstAttendance();
              }}
            >
              Done
            </button>
            <div className="forward-btn">
              <img
                src={Forwardicon}
                alt="forward icon"
                onClick={() => props.setPage(7)}
              />
            </div>
          </div>
        </div>
      </div>
    // </>
  );
};

export default Secondyearlist;
