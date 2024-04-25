import React, { useRef, useState } from "react";
import logo from "../assets/logo.jpeg";
import { Button } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import { userData } from "./Helpers";
import { Link, useNavigate } from "react-router-dom";

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
  const name = sessionStorage.getItem("user");
  // JSON.parse(name)
  console.log(name);

  const { userName, phoneNumber, userID } = userData();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.setItem("user", "");
    navigate("/login");
  };
  // const itemCount =100
  // const displayItemCount = itemCount > 99 ? '99+' : itemCount;
  console.log(userData.userName);
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
          <a href="gallery" >
            Gallery
          </a>
          <a href="booking">Book Us</a>
          <a href="profile">{userName}</a>
          {/* <a href="/payment">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>{" "}<span class=" translate-middle badge rounded-pill bg-danger">{displayItemCount}</span>
          </a> */}
          <div>
         
            {isLoggedIn ? (
              <>
                {/* <Link to={"/profile"}> {userName}</Link> */}
                {/* <button className="btn btn-primary btn-lg px-1 gap-3" onClick={handleLogout}>
                  Logout
                </button>{" "} */}
                
                <a href="" onClick={handleLogout}>
                  Logout
                </a>

                {/* <Button onClick={handleLogout}>Logout</Button> */}
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
