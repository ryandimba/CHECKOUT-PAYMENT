import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function TestPage() {
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
        "https://checkout-barber-django-rest-api.onrender.com/api/get/services/"
      )
      .then((response) => {
        // Set records state with data from the response
        console.log("Response from API:", response);
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
      {/* <div className="table-responsive-xxl">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID#</th>
              <th scope="col">Service</th>
              <th scope="col">Description</th>
              <th scope="col">Service Image</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {records.map((list, index) => (
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.service}</td>
                <td>{list.description}</td>
                <td>{list.service_image}</td>
                <td>{list.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    <div className="container">
      {records.map((list, index) => (
        <div key={index}>
          ID: {list.id}
          <p></p>
          Service: {list.service}
          <p></p>
          Description: {list.description}
          <p></p>
          Service Image: {list.service_image}
          <p></p>
          Price: {list.price}
        </div>
      ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default TestPage;
