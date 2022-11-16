import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./index.module.css";

const NavbarHeader = () => {
  return (
    <div>
      <Navbar className={`${style.customNav}`} expand="lg">
        <Container fluid className={style.ContainerMain}>
          <Navbar.Brand
            href="#"
            className={style.navbarBrand}
            style={{ fontSize: "30px" }}
          >
            Tax Lien
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className={`${style.navLinkFlex}`}>
              <Link href="#action1">Home</Link>
              <Link href="#action1">Dashboard</Link>
              <Link href="#action1">Contact Us</Link>
              <Link href="#action1">Help Center</Link>
              <Link href="#action1">About Us</Link>
              <div className="d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="white"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <p className="text-light ps-3 text-center m-0">Hadeed U</p>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
