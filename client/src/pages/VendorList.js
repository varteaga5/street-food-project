import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VendorList = () => {
  const testVendors = [
    { id: 1, companyName: "jose tacos", foodType: "donkey" },
    { id: 2, companyName: "juan burritos ", foodType: "burro" },
    { id: 3, companyName: "jack tacos", foodType: "taco" },
  ];

  const [vendors, setVendors] = useState(testVendors);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/vendorlist").then((r) => r.json());
    //   .then((data) => setVendors(data));
  }, []);

  const handleSearch = (e) => {
    // get to handle request
    fetch("/vendorQuery/" + search, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
    //   .then((data) => setVendors(data));
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
              <button>Visit Vendor</button>
            </div>
          </div>
        ))
      ) : (
        <>
          <h2>No vendors Found</h2>
          <button as={Link} to="/new">
            Browse Vendors
          </button>
        </>
      )}
    </section>
  );
};

export default VendorList;
