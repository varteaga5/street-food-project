import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavList = () => {
  // change usersHouses to vendors
  const [vendors, setVendors] = useState("");
  //   console.log("this is vendors", vendors);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/showfav")
      .then((r) => r.json())
      .then((data) => setVendors(data));
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
              <h2>{vendor.companyName}</h2>
              <p>{vendor.foodType}</p>

              <button id={vendor.id} onClick={handleDelete}>
                Remove
              </button>
            </div>
          </article>
        ))
      ) : (
        <>
          <h2>No vendors Found</h2>
          <Link as={Link} to="/">
            <button>Browse Vendors</button>
          </Link>
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
