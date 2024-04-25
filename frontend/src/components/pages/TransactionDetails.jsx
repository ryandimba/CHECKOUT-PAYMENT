import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import barber from "../assets/paymentMethods2.jpg";
import axios from "axios";

function TransactionDetails() {
  const [records, setRecords] = useState([]);

  // useEffect(() =>{

  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(json =>console.log(json))
  //   .then(data => setRecords(data))
  //   .catch(err => console.log(err))
  // })
  console.log(records);
  useEffect(() => {
    // Use Axios to fetch data
    axios
      .get(
        "https://quickshave.evah-audi.tech/api/get/users/"
      )
      .then((response) => {
        // Set records state with data from the response
        setRecords(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts
  return (
    <>
      <Header></Header>
      <hr></hr>
      <p></p>
      <div className="table-responsive-xxl">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Location</th>
              <th scope="col">Username</th>
              <th scope="col">BirthDate</th>
              <th scope="col">Booking ID</th>
              <th scope="col">Service</th>
              <th scope="col">Price</th>
              <th scope="col">Feedback</th>
              <th scope="col">Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((list, index) => (
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.fullname}</td>
                <td>{list.phone}</td>
                <td>{list.location}</td>
                <td>{list.username}</td>
                <td>{list.birthdate}</td>
                <td>
                  {" "}
                  {list.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.id}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                <td>
                  {" "}
                  {list.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.service}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                <td>
                  {" "}
                  {list.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.price}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>
                <td>
                  {" "}
                  {list.service_details.map((list, index) => (
                    <tr key={index}>
                      <td>{list.description}</td>
                      {/* <td>{service.price}</td> */}
                    </tr>
                  ))}
                </td>

                <td>{list.booking_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <Footer></Footer>
    </>
  );
}

export default TransactionDetails;
