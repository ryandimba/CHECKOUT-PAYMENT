import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import LoginPic from "../assets/login-pic.jpg";
import Shave from "../assets/shave.webp";
import BarberShop from "../assets/Barbershop6.jpg";

function Gallery() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResult, setSearchResult] = useState(null); // Change to single object instead of array

  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (searchQuery.trim() !== "") {
  //       const response = await axios.get(
  //         `https://quickshave.evah-audi.tech/api/users/details/byid/?id=${searchQuery}`
  //       );
  //       console.log("Response from API:", response.data);
  //       setSearchResult(response.data); // Set response data directly
  //     } else {
  //       setSearchResult(null); // Clear the result if search query is empty
  //     }
  //   } catch (error) {
  //     console.error("Error fetching search result:", error);
  //     setSearchResult(null); // Clear the result in case of error
  //   }
  // };

  return (
    <>
      <Header />
      <hr />
      {/* <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Enter search query"
          />
          <button type="submit">Search</button>
        </form>

          <div>
            <table className="table table-striped table-responsive{-sm|-md|-lg|-xl|-xxl}">
             <thead>
                <tr>
                <th scope="col">ID#</th>
                <th scope="col">Service</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Phone</th>
              </tr>
              </thead>
              <tbody>
              {searchResult &&
                searchResult.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.id}</td>
                    <td>{detail.fullname}</td>
                    <td>{detail.location}</td>
                    <td>{detail.username}</td>
                    <td>{searchResult.phone}</td>
                  </tr>
                ))}
              {searchResult &&
                searchResult.length === 0 && (
                  <tr>
                    <td colSpan="5">No booking details found.</td>
                  </tr>
                )}
              </tbody>
              </table>
          </div> */}
      <div className="container">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              First featurette heading.{" "}
              <span class="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={LoginPic}
              class=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto "
              alt="Image 1"
              width="500"
              height="500"
            />
          </div>
        </div>
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.{" "}
              <span class="text-body-secondary">See for yourself.</span>
            </h2>
            <p class="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              src={Shave}
              class=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto "
              alt="Image 1"
              width="500"
              height="500"
            />
          </div>
        </div>
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              And lastly, this one.{" "}
              <span class="text-body-secondary">Checkmate.</span>
            </h2>
            <p class="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={BarberShop}
              class=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto "
              alt="Image 1"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
