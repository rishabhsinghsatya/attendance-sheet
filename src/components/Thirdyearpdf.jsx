import React from "react";
import Header from "./Header";
import Backicon from "../icons/Back.svg";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Save from "../icons/Save.svg";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

// import { useState } from "react";
// import { db } from "../firebase";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Thirdyearpdf = (props) => {
  const [list, setList] = useState();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    item();
  }, []);
  // const [name, setName] = useState("");
  // const [rollno, setRollno] = useState("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;
  // //add todo
  // const addName = (e) => {
  //   e.preventDefault();
  //   addDoc(collection(db, "attendance"), {
  //     naam: name,
  //     timestamp: serverTimestamp(),
  //     no: rollno,
  //   });
  //   setName("");
  //   setRollno("");
  // };

  // const colRef = collection(db, "attendanceNew");
  // getDocs(colRef).then((snapshot) => {
  //   let attendanceNew = [];
  //   snapshot.docs.forEach((doc) => {
  //     attendanceNew.push({ ...doc.data(), id: doc.i });
  //   });
  //   console.log(attendanceNew);
  // });
  // const q = query(colRef, orderBy("id"), limit(2));
  const item = async () => {
    const docRef = doc(db, "Third year", today);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setList(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return (
    <div className="full-second-page">
      {/* <Header today={props.today} /> */}
      <div className="date-heading">
        <h3 className="date">Date: {props.today}</h3>
        <p className="header-heading">Attendance 3rd year B.tech (CSE)</p>
      </div>

      {/* <form>
        <input
          type="text"
          placeholder="enter name.."
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <input
          type="text"
          placeholder="enter roll no.."
          onChange={(e) => setRollno(e.target.value)}
          value={rollno}
        ></input>
        <button type="submit" onClick={addName}>
          ok
        </button>
      </form> */}

      <div>
        <div ref={componentRef} className="background-thirdyearpdf">
          <div>
            <h3 className="attendance">
              Attendance: [{props.today}] B.tech (cse) 3rd year
            </h3>
          </div>
          <hr />
          <div>
            <ol className="list">
              {list &&
                list.presentStudents.map((student) => (
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
            onClick={() => props.setPage(2)}
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
  );
};

export default Thirdyearpdf;
