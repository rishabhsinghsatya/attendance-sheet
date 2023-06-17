import React from "react";
// import { useState } from "react";
import Backicon from "../icons/Back.svg";
import Forwardicon from "../icons/Forward.svg";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const Footer = (props) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;
  const addThirdAttendance = async () => {
    // addDoc(
    //   collection(db, "attendanceNew").doc("date").set({
    //     date: new Date(),
    //     presentStudents: props.presentStudents,
    //   })
    // );
    await setDoc(doc(db, "Third year", today), {
      id: today,
      presentStudents: props.presentStudents,
    });
  };

  return (
    <div className="button-container">
      <div className="back-btn">
        <img src={Backicon} alt="back icon" onClick={() => props.setPage(1)} />
      </div>
      <button
        type="submit"
        className="footer"
        onClick={() => {
          props.setPage(3);
          addThirdAttendance();
        }}
      >
        Done
      </button>
      <div className="forward-btn">
        <img
          src={Forwardicon}
          alt="forward icon"
          onClick={() => props.setPage(3)}
        />
      </div>
    </div>
  );
};

export default Footer;
