import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavList = () => {
  const testVendors = [
    { id: 1, name: "jose", description: "donkey" },
    { id: 2, name: "juan", description: "burro" },
    { id: 3, name: "jack", description: "taco" },
  ];
  // change usersHouses to vendors
  const [vendors, setVendors] = useState(testVendors);
  //   console.log("this is vendors", vendors);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/vendors").then((r) => r.json());
    //   .then((data) => console.log("this is data", data));
  }, []);

  function handleDelete(deleteVendor) {
    fetch("/vendors/" + deleteVendor.target.id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(setVendors);
  }

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

  return (
    <section>
      <h3>My Favorite Vendors</h3>
      <label>search here</label>
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
          <article key={vendor.id}>
            <div>
              <h2>{vendor.name}</h2>
              <p>{vendor.description}</p>
              <button>Visit Vendor</button>{" "}
              <button id={vendor.id} onClick={handleDelete}>
                Remove
              </button>
            </div>
          </article>
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
export default FavList;

// visit vendor button
{
  /* <Link
style={{ textDecoration: "none" }}
to={{
  pathname: "/Edit",
  state: { vendorInfo: vendor },
}}
>
Go To Vendor
</Link> */
}
