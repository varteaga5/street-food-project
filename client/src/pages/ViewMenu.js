import React, { useEffect, useState } from "react";

const ViewMenu = ({ menuInfo }) => {
  console.log("this is menuInfo: ", menuInfo);
  // clicks view menu, this will mirror btnaddvend
  // send fetch to retrieve menu items
  // when creating item use current vendor

  // Menu model to include:
  // companyName
  // foodName
  // foodDesc
  // price
  // belongs_to vendor

  const [menuList, setMenuList] = useState([
    {
      id: 1,
      companyName: "jimstacos",
      foodName: "tacos",
      foodDesc: "great tasting authentic tacos",
      price: "3",
    },
  ]);
  return (
    <section>
      <h3>{menuList.companyName}</h3>
      <div>this is ViewMenu</div>
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
          </div>
        ))
      ) : (
        <>
          <h2>No Menu items Found</h2>
        </>
      )}
    </section>
  );
};

export default ViewMenu;
