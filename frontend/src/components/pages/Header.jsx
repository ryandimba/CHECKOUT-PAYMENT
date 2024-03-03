import React from "react";
import { useRef } from "react";
import logo from "../assets/logo.jpeg";
import { Button } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        {/* <div>Logo</div> */}
        <nav ref={navRef}>
          <a href="/">
            <img src={logo} alt="" className="logo"></img>
          </a>
          <a href="/">Quick Shave</a>
          {/* <a href="/">Home</a> */}
          <a href="blog">Blog</a>
          <a href="about">About</a>
          {/* <a href="services">Services</a> */}
          <a href="gallery">Gallery</a>

          <a href="booking">
            <Button className="btn">Book Us</Button>
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <a href="/">
          <img src={logo} alt="" className="logo"></img>
        </a>
        Quick Shave
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="" className="logo"></img>
            Quick Shave
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse align-items-center justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">
                  About
                </a>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter your location"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}

      {/* <div className="headerBar">
        <nav>
          <a href="/">
            <img src={logo} alt="" className="logo"></img>
          </a>
          <ul className="navbar-list">
            <a href="about">
              <li> About</li>
            </a>
            <a href="gallery">
              <li>Gallery</li>
            </a>
            <a href="blog">
              <li>Blog</li>
            </a>
            <a href="contact">
              <li>Contact</li>
            </a>
          </ul>

        </nav>
      </div> */}
    </>
  );
}

export default Header;
