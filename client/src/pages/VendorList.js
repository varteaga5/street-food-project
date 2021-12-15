import { useEffect, useState } from "react";
import BtnAddVend from "../components/BtnAddVend";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const VendorList = ({ currentUser, getMenuInfo, getVendorName }) => {
  const [vendors, setVendors] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/vendorlist")
      .then((r) => r.json())
      .then((data) => setVendors(data));
  }, []);

  const handleSearch = (e) => {
    // get to handle request
    fetch("/vendorQuery/" + search, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => setVendors(data));
  };

  const viewMenuHandler = (e) => {
    console.log("this is e.target.id ", e.target.id);
    fetch("/menus/" + e.target.id)
      .then((r) => r.json())
      .then((menu) => getMenuInfo(menu));

    getVendorName(e.target.getAttribute("getname"));
    navigate("/ViewMenu");
  };

  return (
    <section>
      <h3>Vendors near you</h3>
      <label>search here </label>
      <input
        type="text"
        id="searchBar"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>SEARCH</button>
      {vendors && vendors.length > 0 ? (
        vendors.map((vendor) => (
          <div
            key={vendor.id}
            style={{
              border: "1px solid #1a202c",
              padding: "8px",
              minWidth: "32px",
              maxWidth: "512px",
              background: "transparent",
              transition: "all 0.1s ease-in",
            }}
          >
            <div>
              <h2>{vendor.companyName}</h2>
              <p>{vendor.foodType}</p>
              <p>vendor.id: {vendor.id}</p>

              <button
                id={vendor.id}
                onClick={viewMenuHandler}
                getname={vendor.companyName}
              >
                view menu
              </button>
              <BtnAddVend
                currentUser={currentUser}
                currentVendor={vendor}
              ></BtnAddVend>
            </div>
          </div>
        ))
      ) : (
        <>
          <h2>No vendors Found</h2>
        </>
      )}
    </section>
  );
};

export default VendorList;
