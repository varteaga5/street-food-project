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
  const [user, setUser] = useState(null);

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
  console.log("this is user", user);

  const vendorType = (
    <>
      <Route path="/VendProfile" element={<VendProfile currentUser={user} />} />
      <Route path="/Login" element={<Login />} />
    </>
  );
  const custType = (
    <>
      <Route path="/FavList" element={<FavList />} />
      <Route path="/" element={<VendorList />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CustProfile" element={<CustProfile currentUser={user} />} />
    </>
  );

  // checks if user.type is Vendor and sets appropriate userType
  let userType;
  const userIsVendor = user.type === "Vendor";
  userIsVendor ? (userType = vendorType) : (userType = custType);

  return (
    <div className="App">
      <NavBar userIsVendor={userIsVendor} setUser={setUser} />
      <h3>hello, {user.firstName} </h3>
      <div>
        <Routes>{userType}</Routes>
      </div>
    </div>
  );
}

export default App;
