import React, { useEffect, useState } from "react";
import axios from "axios";
import { userData } from "./Helpers";
import Header from "./Header";
import Footer from "./Footer";

function Profile() {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [username, setUsername] = useState("");
  const { userID } = userData();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedUsername = sessionStorage.getItem("user");
        const name = JSON.parse(storedUsername);
        console.log("username", name.userName, name.userID);

        const response = await axios.get(
          `https://checkout-barber-django-rest-api.onrender.com/api/users/details/byid/?id=${name.userID}`
        );
        setBookingDetails(response.data);
        console.log(name.userName);
        console.log(response.data);
        console.log("userDetails", bookingDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [userID]);

  const { userName, phoneNumber } = userData();

  return (
    <>
      <Header />
      <hr />
      <div className="container">
        <p>
          Welcome {userName}, your phone number is {phoneNumber} and your ID is{" "}
          {userID}
        </p>
        <table class="table table-striped table-responsive{-sm|-md|-lg|-xl|-xxl}">
          <thead>
            <tr>
              <th scope="col">ID#</th>
              <th scope="col">Service</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Phone</th>
              {/* <th scope="col">Address</th>
              <th scope="col">Website</th>
              <th scope="col">Website</th> */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(bookingDetails).length > 0 ? (
              // Render table rows if bookingDetails object is not empty
              <tr>
                <td>
                  {" "}
                  {bookingDetails.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.id}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                <td>
                  {" "}
                  {bookingDetails.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.service}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                <td>
                  {" "}
                  {bookingDetails.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.description}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                <td>{" "}
                  {bookingDetails.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.price}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}</td>
                <td>{bookingDetails.phone}</td>
                <td>{bookingDetails.website}</td>
                <td>
                  {" "}
                  {bookingDetails.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.id}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                {" "}
                {/* Assuming you want to render website twice */}
              </tr>
            ) : (
              // Render alternative content if bookingDetails object is empty
              <tr>
                <td colSpan="8">No user details found.</td>
              </tr>
            )}

            {/* <tr>
      <th scope="row">1</th>
      <td>ID</td>
      <td>Username</td>
      <td>Email</td>
    </tr> */}
            {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
