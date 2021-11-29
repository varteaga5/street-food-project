import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustProfile = () => {
  const [name, setName] = useState("rick");
  const password = "123";
  const favFood = "mex";
  const [wasClicked, setWasClicked] = useState(false);
  const [subOrEdit, setSubOrEdit] = useState(false);

  const handleClick = () => {
    setSubOrEdit(!subOrEdit);
    console.log("handle click");
    return setWasClicked(!wasClicked);
  };

  const handleCancel = () => {
    setWasClicked(!wasClicked);
    setSubOrEdit(!subOrEdit);
  };
  return (
    <div>
      This is CustProfile
      {wasClicked ? (
        <>
          <div>
            <label>name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>{password}</div>
          <div>{favFood}</div>
          <div>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{password}</div>
          <div>{favFood}</div>
        </>
      )}
      <hr />
      <button onClick={handleClick}>{subOrEdit ? "Submit" : "Edit"}</button>
    </div>
  );
};

export default CustProfile;
