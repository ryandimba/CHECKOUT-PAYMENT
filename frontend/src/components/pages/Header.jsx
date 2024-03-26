import React, { useRef, useState } from "react";
import logo from "../assets/logo.jpeg";
import { Button } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import { userData } from "./Helpers";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef();

  // State for navbar toggle and user authentication
  const [isOpen, setIsOpen] = useState(false);
  const { token } = userData();
  const isLoggedIn = !!token;

  // Function to toggle navbar
  const toggleNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsOpen(!isOpen);
  };
  const name = sessionStorage.getItem('user')
  JSON.parse(name)
  console.log(name);

  const { userName,phoneNumber,userID } = userData()

  return (
    <>
      <header>
        <nav ref={navRef}>
          <a href="/">
            <img src={logo} alt="" className="logo"></img>
          </a>
          <a href="/">Quick Shave</a>
          <a href="blog">Blog</a>
          <a href="about">About</a>
          <a href="gallery">Gallery</a>
          <a href="booking">
            {/* <Button className="btn"></Button> */}
            Book Us
          </a>
          <div>
            {isLoggedIn ? (
              <>
                <Link to={"/payment"}>Logout</Link>
                <Link to={"/profile"}> {userName}</Link>
              </>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
          <button className="nav-btn nav-close-btn" onClick={toggleNavBar}>
            <FaTimes />
          </button>
        </nav>
        <a href="/">
          <img src={logo} alt="" className="logo"></img>
        </a>
        Quick Shave
        <button className="nav-btn" onClick={toggleNavBar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Header;
