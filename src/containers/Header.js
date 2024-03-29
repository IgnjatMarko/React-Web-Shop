import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import { Link } from "react-router-dom";
import Cart from "./Cart"

const Header = () => {
  
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex mx-auto" href="#">
            <img
              src="/images/Bootstrap_logo.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <h5 className="ms-2" style={{ color: "#6610f2" }}>
              Bootstrap
            </h5>
          </a>
        </div>
      </nav>
      <nav
        className="navbar rounded-pill d-flex justify-content-evenly"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to={"/"} className="text-decoration-none">
            <img
              src="/images/logo192.png"
              alt="Logo"
              width="24"
              height="24"
              className="d-inline-block align-text-top ms-3"
            />
            <a className="navbar-brand ms-1 text-decoration-none" href="#">
              React Web Shop
            </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active disabled" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <Provider store={store}>
              <Cart></Cart>
            </Provider>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Header;
