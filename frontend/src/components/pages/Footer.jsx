import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Footer() {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array to ensure the effect runs only once



  const [emailData, setEmailData] = useState({
    // username: "",
    // password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(emailData);

    try {
      const response = await axios.post(
        " https://quickshave.evah-audi.tech/api/newsletter/subscribe/",
        emailData
      );
      console.log("Email Sent Successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Email Not Sent:", error);
    }
  };

  // const handleChange = (event) => {
  //   setEmailData({
  //     [event.target.username]: event.target.value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="blog" class="nav-link p-0 text-body-secondary">
                    Blog
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="about" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="services" class="nav-link p-0 text-body-secondary">
                    Services
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="gallery" class="nav-link p-0 text-body-secondary">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-8 col-md-2 mb-3">
              <h5>Location:</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a
                    href="https://www.google.co.ke/maps/place/Quick+Mart/
                    @-1.3139127,36.9149247,19.37z/data=!4m6!3m5!1s0x182f132645d2856f:0x24b6e0a8f7262bab!8m2!3d-1.
                    313847!4d36.9152902!16s%2Fg%2F11j7vpsv4n?entry=ttu"
                    target="_blank"
                    class="nav-link p-0 text-body-secondary"
                  >
                    Embakasi road, Quickmat building opposite KQ Pride Center
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    quickshave12@gmail.com
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    0113880663/0724795137
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form onSubmit={handleSubmit}>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                  name="email"
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                    value={emailData.email}
                    onChange={handleChange}
                  />
                  <button class="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© {currentYear} Quick Shave, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
