import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Gallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null); // Change to single object instead of array

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      if (searchQuery.trim() !== '') {
        const response = await axios.get(`https://checkout-barber-django-rest-api.onrender.com/api/users/details/byid/?id=${searchQuery}`);
        console.log("Response from API:", response.data);
        setSearchResult(response.data); // Set response data directly
      } else {
        setSearchResult(null); // Clear the result if search query is empty
      }
    } catch (error) {
      console.error('Error fetching search result:', error);
      setSearchResult(null); // Clear the result in case of error
    }
  };

  return (
    <>
      <Header />
      <hr />
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Enter search query"
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {/* Render data conditionally */}
          {searchResult ? (
            <div>
              <h2>Name: {searchResult.fullname}</h2>
              <p>ID: {searchResult.id}</p>
              {/* Render other properties as needed */}
            </div>
          ) : (
            <p>No result found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
