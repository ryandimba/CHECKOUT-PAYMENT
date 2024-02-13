import React from 'react'
import taikai1 from "../assets/logo.jpeg";
import barber from "../assets/barber2.jpg";


function HomePage() {
  return (
    <>
           <div className="headerBar">
        <nav>
          <a href="/">
            <img src={taikai1} alt="" className="logo"></img>
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
      </div>
      {/* <div>Handla's Website</div> */}
      <div>
        <img src={barber} alt='' className='barber'></img>
      </div>
    </>
  )
}

export default HomePage