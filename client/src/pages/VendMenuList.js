import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VendMenuList = ({ currentUser }) => {
  const [menuList, setMenuList] = useState(null);
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/menus/" + currentUser.id).then((r) => {
      if (r.ok) {
        r.json().then((menu) => setMenuList(menu));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }, []);
  console.log("this is menuList", menuList);

  function handleDelete(menuItem) {
    fetch("/menus/" + menuItem.target.id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(setMenuList);
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
      .then((data) => setMenuList(data));
  };

  return (
    <section>
      <h3>My Menu</h3>
      <div>this is VendMenuList</div>
      <label>search here </label>
      <input
        type="text"
        id="searchBar"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>SEARCH</button>

      <div>
        <Link as={Link} to="/NewMenuItem">
          <button>Add New Menu Item</button>
        </Link>
      </div>
      {menuList && menuList.length > 0 ? (
        menuList.map((food) => (
          <div
            key={food.id}
            style={{
              border: "1px solid #1a202c",
              padding: "8px",
              minWidth: "32px",
              maxWidth: "512px",
              background: "transparent",
              transition: "all 0.1s ease-in",
              textAlign: "center",
            }}
          >
            <div>
              <h2>{food.foodName}</h2>
              <p>{food.foodDesc}</p>
              <p>${food.price}</p>
            </div>
            <div>
              <button>Edit</button>
              <button id={food.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <>
          <h2>no menu items found</h2>
        </>
      )}
    </section>
  );
};

export default VendMenuList;
