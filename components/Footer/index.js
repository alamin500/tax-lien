import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./index.module.css";
import Link from "next/link";

const index = () => {
  return (
    <div className={`${style.footerContainer}`}>
      <Container>
        <Row className={`${style.footerContent}`}>
          <Col className={`${style.footerContentLogo}`} xs={12} md={6}>
            <h1>
              <span className="text-primary">TAX </span>
              <span className="text-danger">LIENS</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              doloremque molestias quos, nulla, quis beatae eveniet sint quod
            </p>
          </Col>
          <Col
            className={`${style.footerContentHeader}`}
            xs={{ order: "second" }}
          >
            <h4>About Us</h4>
            <Link href="">
              <p>Home</p>
            </Link>
            <Link href="">
              <p>Product</p>
            </Link>
            <Link href="">
              <p>Services</p>
            </Link>
          </Col>
          <Col
            className={`${style.footerContentHeader}`}
            xs={{ order: "third" }}
          >
            <h4>FAQ</h4>
            <Link href="">
              <p>Home</p>
            </Link>
            <Link href="">
              <p className="d-flex align-items-center">Careers</p>
            </Link>
            <Link href="">
              <p>Services</p>
            </Link>
          </Col>
          <Col
            className={`${style.footerContentHeader}`}
            xs={{ order: "forth" }}
          >
            <h4>Terms and Conditions</h4>
            <Link href="">
              <p>Blog</p>
            </Link>
            <Link href="">
              <p>Products</p>
            </Link>
            <Link href="">
              <p>Services</p>
            </Link>
          </Col>
        </Row>
        <Row
          className={` mb-2 pt-2 ${style.footerContent}`}
          style={{ borderTop: "1px solid #bababa" }}
        >
          <Col className={`${style.footerContentCopy}`} xs={12} md={6}>
            @2022 All rights reserved.
          </Col>
          <Col>Lorem ipsum.</Col>
          <Col>Lorem ipsum.</Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
