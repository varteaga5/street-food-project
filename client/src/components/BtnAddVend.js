import React from "react";
import { useState } from "react";

const BtnAddVend = ({ currentVendor, currentUser }) => {
  const [addedVend, setAddedVend] = useState(false);
  const [errors, setErrors] = useState([]);

  console.log("this is currentUser.id: ", currentUser.id);

  const clickHandler = (e) => {
    fetch("/addfav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: currentVendor.firstName,
        lastName: currentVendor.lastName,
        email: currentVendor.email,
        foodType: currentVendor.foodType,
        companyName: currentVendor.companyName,
        user_id: currentUser.id,
      }),
    }).then((r) => {
      if (r.ok) {
        setAddedVend((prevState) => !prevState);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };
  return (
    <button onClick={clickHandler}>
      {addedVend ? "added" : "add to favorites"}
    </button>
  );
};

export default BtnAddVend;
