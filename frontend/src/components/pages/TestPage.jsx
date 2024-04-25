import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { tailChase } from "ldrs";
import { Skeleton, Spin, message } from "antd";
import { getGreeting, userData } from "./Helpers";
import { useBookingView } from "./Helpers";
import { useNavigate } from "react-router-dom";


function TestPage() {
  const navigate = useNavigate()
  const { service } = useBookingView();
  const price = service.price
  console.log(service);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { userName, phoneNumber } = userData();
  const paymentData = {price, phoneNumber}

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
    setIsLoading(true);
    try {
      axios
        .get(
          "https://quickshave.evah-audi.tech/api/get/users/"
        )
        .then((response) => {
          // Set records state with data from the response
          console.log("Response from API:", response);
          setRecords(response.data);
          setIsLoading(false);
          message.success("Good");
        });
    } catch (error) {
      // Handle any errors
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
    }
  }, []); // Empty dependency array to fetch data only once when component mounts
  tailChase.register();

  if (isLoading) {
    return (
      <div>
        {/* // Default values shown */}
        {/* <l-tail-chase
      size="40"
      speed="1.75" 
      color="black" 
  ></l-tail-chase>*/}
        <Skeleton
          paragraph={{
            rows: 15,
          }}
        ></Skeleton>
        <Spin spinning={isLoading} fullscreen></Spin>
      </div>
    );
  }
  if (error) {
    return <div>Something went wrong. Please try again...</div>;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(paymentData);

    try {
      const response = await axios.post(
        "https://quickshave.evah-audi.tech/api/mpesa/lipanampesa/",
        paymentData
      );
      console.log("Payment was successful:", response.data);
      // After a successful payment, the user is routed to the /paymentConfirmation page
      // When you don't add the "/" before a Url you get www.current-Url/the link
      navigate("/paymentConfirmation");
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <>
      <Header></Header>
      <hr></hr>
      <p></p>
      <form  onSubmit={handleSubmit}>
        Number: {phoneNumber}
        <p>Amount: {service.price}</p>
        <button type="submit">submit</button>
      </form>
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
