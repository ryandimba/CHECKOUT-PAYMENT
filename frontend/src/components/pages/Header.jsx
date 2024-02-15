import React from 'react'
import logo from "../assets/logo.jpeg";


function Header() {
  return (
    <>
          <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="booking"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="nail-spa">
                      Nail Spa
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="massage-therapy">
                      Massage therapy
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="booking">
                      Book an appointment
                    </a>
                  </li>
                </ul>
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
      </nav>


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
  )
}

export default Header