import React from "react";
import Header from "./Header";
import Save from "../icons/Save.svg";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Backicon from "../icons/Back.svg";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

const Firstyearpdf = (props) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;
  const [listfirst, setListsfirst] = useState();
  const group = async () => {
    const docRef = doc(db, "First year", today);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setListsfirst(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    group();
  }, []);

  return (
    <>
      <div className="full-second-page">
        <div className="date-heading">
          <h3 className="date">Date: {props.today}</h3>
          <p className="header-heading">Attendance 1st year B.tech (CSE)</p>
        </div>

        <div>
          <div ref={componentRef} className="card">
            <div>
              <h3>Attendance: [{props.today}] B.tech (cse) 1st year</h3>
            </div>
            <hr />
            <div>
              <ol className="list">
                {listfirst &&
                  listfirst.presentStudents.map((student) => (
                    <li className="list-item">
                      {student}
                      <hr></hr>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="thirdpage-footer">
          <div className="back-btn">
            <img
              src={Backicon}
              alt="back icon"
              onClick={() => props.setPage(6)}
            />
          </div>
          <img
            className="saveimage"
            src={Save}
            alt="Save icon"
            onClick={handlePrint}
          />
        </div>
      </div>
    </>
  );
};

export default Firstyearpdf;
