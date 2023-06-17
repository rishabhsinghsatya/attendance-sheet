import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="date-heading">
        <h3 className="date">Date: {props.today}</h3>
        <p className="header-heading">Attendance 3rd year B.tech (CSE)</p>
      </div>
    </>
  );
};

export default Header;
