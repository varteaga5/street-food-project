import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavBar = ({ setUser, userIsVendor }) => {
  console.log("this is userIsVendor", userIsVendor);

  let userType;
  const vendorType = (
    <>
      <Nav.Link href="/">My Profile</Nav.Link>
    </>
  );
  const custType = (
    <>
      <Nav.Link href="/VendorList">Browse Vendors</Nav.Link>
      <Nav.Link href="/">My favorite Vendors</Nav.Link>
      <Nav.Link href="/CustProfile">My Profile</Nav.Link>
    </>
  );
  userIsVendor ? (userType = vendorType) : (userType = custType);

  let userTypeDD;
  const vendorTypeDD = (
    <>
      <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
    </>
  );
  const custTypeDD = (
    <>
      <NavDropdown.Item href="/">My favorite Vendors</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/VendorList">Browse Vendors</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/CustProfile">My Profile</NavDropdown.Item>
    </>
  );
  userIsVendor ? (userTypeDD = vendorTypeDD) : (userTypeDD = custTypeDD);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Street Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {userType}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {userTypeDD}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
