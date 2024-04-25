import React, { useEffect, useState } from "react";
import axios from "axios";
import { getGreeting, userData } from "./Helpers";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Profile() {
  const [bookingDetails, setBookingDetails] = useState([]);
  const { userID } = userData();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedUsername = sessionStorage.getItem("user");
        const name = JSON.parse(storedUsername);
        const response = await axios.get(
          `https://quickshave.evah-audi.tech/api/users/details/byid/?id=${name.userID}`
        );
        setBookingDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [userID]);

  const { userName, phoneNumber } = userData();
  const greeting = getGreeting();
  console.log("User details:",bookingDetails.service_details);
  // console.log("Booking ID:",bookingDetails.service_details[0]);
  // const count = bookingDetails.service_details
//   const itemCount = Object.values(count).length;
// console.log("Count",itemCount); 
  // console.log(bookingDetails.service_details[3].service_image);
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  // Example usage
  const originalString = "This is a long string that needs to be truncated";
  const truncatedString = truncateString(originalString, 20);
  console.log(truncatedString); // Output: "This is a long stri..."

  const handleDeleteService = async (serviceId) => {
    try {
      // Make a DELETE request to the API endpoint to delete the service
      const response = await axios.delete(
        `https://quickshave.evah-audi.tech/api/pricelist/details/byid/?id=${serviceId}`
      );
      console.log(response.data);
      // Update the state to reflect the changes after successful deletion
      setBookingDetails((prevDetails) =>
        prevDetails.filter((detail) => detail.id !== serviceId)
      );


      console.log("Service deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <>
      <Header />
      <hr />
      <div className="container">
        <p>
          {greeting} {userName}, welcome back. Your phone number is{" "}
          {phoneNumber} and your ID is {userID}.
           Total bookings: {bookingDetails.service_details?.length || 0}
        </p>
        <div className="container marketing">
          <div className="row ">
            {/* <div className="col"> */}
              {bookingDetails.service_details &&
                bookingDetails.service_details.map((detail, index) => (
                  <div key={index} class="card col-lg-4" style={{ width: 300 }}>
                    <img
                      class="card-img-top"
                      style={{ width: 300 }}
                      src={detail.service_image}
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{detail.service}</h5>
                      <p class="card-text">{detail.description}.</p>
                      <p>
                        <b>Amount: Ksh {detail.price}</b>
                      </p>
                      <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteService(detail.id)}
                    >
                      Delete
                    </button>
                      <Link to={`/payment/${detail.id}?service=${detail.service}?amount=${detail.price}?username=${userName}?phoneNumber=${phoneNumber}`} class="btn btn-success">
                        Proceed to pay
                      </Link>
                    </div>
                  </div>
                ))}
            {/* </div> */}
          </div>
        </div>
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
            {bookingDetails.service_details &&
              bookingDetails.service_details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.id}</td>
                  <td>{detail.service}</td>
                  <td>{detail.description}</td>
                  <td>{detail.price}</td>
                  <td>{bookingDetails.phone}</td>
                  <td>
                    {/* Button to delete service */}
                    <button
                      className="btn btn-success"
                      // onClick={() => handleDeleteService(detail.id)}
                    >
                      Pay
                    </button>
                  </td>
                  <td>
                    {/* Button to delete service */}
                    {/* <button
                      className="btn btn-primary"
                      // onClick={() => handleDeleteService(detail.id)}
                    >
                      Update
                    </button> */}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteService(detail.id)}
                    >
                      Delete
                    </button>
                    {/* Button to delete service */}
                  </td>
                </tr>
              ))}
            {bookingDetails.service_details &&
              bookingDetails.service_details.length === 0 && (
                <tr>
                  <td colSpan="5">No booking details found.</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
