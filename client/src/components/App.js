import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import "/Users/VCNTX/Development/code/phase5/street-food-project/client/src/App.css";
import Login from "../pages/Login";
import VendorList from "../pages/VendorList";
import FavList from "../pages/FavList";
import ViewMenu from "../pages/ViewMenu";
import CustProfile from "../pages/CustProfile";
import VendProfile from "../pages/VendProfile";
import VendMenuList from "../pages/VendMenuList";
import NewMenuItem from "../pages/NewMenuItem";

function App() {
  const [user, setUser] = useState(null);
  const [menuInfo, setMenuInfo] = useState("");
  // const [userType, setUserType] = useState(null)

  // if (user.type)

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
      <Route path="/" element={<VendProfile currentUser={user} />} />
      <Route
        path="/VendMenuList"
        element={<VendMenuList currentUser={user} />}
      />
      <Route path="/NewMenuItem" element={<NewMenuItem currentUser={user} />} />
      <Route path="/Login" element={<Login />} />
    </>
  );
  const custType = (
    <>
      <Route path="/FavList" element={<FavList />} />
      <Route
        path="/"
        element={<VendorList currentUser={user} getMenuInfo={setMenuInfo} />}
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/ViewMenu" menuInfo={menuInfo} element={<ViewMenu />} />
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
