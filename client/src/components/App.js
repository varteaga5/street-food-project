import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import "/Users/VCNTX/Development/code/phase5/street-food-project/client/src/App.css";
import Login from "../pages/Login";
import VendorList from "../pages/VendorList";
import FavList from "../pages/FavList";
import CustProfile from "../pages/CustProfile";
import VendProfile from "../pages/VendProfile";

function App() {
  // const vendor = {
  //   id: 1,
  //   username: "jose",
  //   password: "",
  //   password_confirmation: "",
  //   foodType: "tacos",
  //   companyName: "jose tacos",
  //   isVendor: true,
  // };
  const [user, setUser] = useState("joe");

  // on page load retrieves current user or vendor
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if not logged in takes user to login screen
  if (!user) return <Login onLogin={setUser} />;

  // checks if user is a vendor, create user.isVendor
  const userIsVendor = !true;
  let userType;
  const vendorType = (
    <>
      <Route path="/" element={<VendProfile />} />
      <Route path="/Login" element={<Login />} />
    </>
  );
  const custType = (
    <>
      <Route path="/" element={<FavList />} />
      <Route path="/VendorList" element={<VendorList />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CustProfile" element={<CustProfile />} />
    </>
  );
  userIsVendor ? (userType = vendorType) : (userType = custType);

  return (
    <div className="App">
      <NavBar userIsVendor={userIsVendor} setUser={setUser} />
      <h3>hello, {user} </h3>
      <div>
        <Routes>{userType}</Routes>
      </div>
    </div>
  );
}

export default App;
