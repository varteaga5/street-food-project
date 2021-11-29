import React from "react";
import { useState } from "react";

const VendProfile = () => {
  const [name, setName] = useState("robert");
  const [username, setUsername] = useState("robert209");
  const [password, setPassword] = useState("123");
  const [foodType, setFoodType] = useState("mex");
  const [companyName, setCompanyName] = useState("roberts tacos");
  const [wasClicked, setWasClicked] = useState(false);
  const [subOrEdit, setSubOrEdit] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setSubOrEdit(!subOrEdit);
    setWasClicked(!wasClicked);
    // fetch("/customer/" + "id", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     username,
    //     password,
    //   }),
    // }).then((r) => {
    //   if (r.ok) {
    //     setWasClicked(!wasClicked);
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  };

  const handleCancel = () => {
    setWasClicked(!wasClicked);
    setSubOrEdit(!subOrEdit);
  };
  return (
    <div>
      {wasClicked ? (
        <>
          <form onSubmit={handleClick}>
            <div>
              <label>name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Company Name</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div>
              <label>Food Type</label>
              <input
                type="text"
                id="foodType"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleClick}>
                {subOrEdit ? "Submit" : "Edit"}
              </button>
              {errors.map((err) => (
                <div key={err}>{err}</div>
              ))}
            </div>
          </form>
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{username}</div>
          <div>password*****</div>
          <div>{companyName}</div>
          <div>{foodType}</div>
        </>
      )}
      <hr />
      <button onClick={handleCancel}>{subOrEdit ? "Cancel" : "Edit"}</button>
    </div>
  );
};

export default VendProfile;
