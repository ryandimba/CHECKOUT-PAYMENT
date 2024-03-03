import React, { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import paymentMethods from "../assets/paymentMethods.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function PaymentPage() {
  const [paymentData, setPaymentData] = useState({
    amount: "",
    phone_number: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(paymentData);

    try {
      const response = await axios.post(
        "https://checkout-barber-django-rest-api.onrender.com/api/mpesa/lipanampesa/",
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

  // const handleChange = (event) => {
  //   setpaymentData({
  //     [event.target.username]: event.target.value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Header></Header>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {" "}
            <div class="Picture">
              <img
                className="img-fluid"
                src={paymentMethods}
                alt="A man shaving"
              ></img>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div class="login-container">
              <div class="Text">
                <form class="form img-fluid" onSubmit={handleSubmit}>
                  <div class="flex-column">
                    <label>Amount </label>
                  </div>
                  <div class="inputForm">
                    <svg
                      height="20"
                      viewBox="0 0 32 32"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Layer_3" data-name="Layer 3">
                        <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                      </g>
                    </svg>
                    <input
                      name="amount"
                      type="text"
                      class="input"
                      placeholder="Enter Amount"
                      required
                      value={paymentData.amount}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="flex-column">
                    <label>Phone Number </label>
                  </div>
                  <div class="inputForm">
                    <svg
                      height="20"
                      viewBox="-64 0 512 512"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                      <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                    </svg>
                    <input
                      name="phone_number"
                      type="text"
                      class="input"
                      placeholder="Enter your Phone Number"
                      required
                      value={paymentData.phone_number}
                      onChange={handleChange}
                    />

                  </div>

                  <div class="flex-row">
                    
                  </div>
                  <button class="button-submit" type="submit">
                    Pay Now
                  </button>
                  

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default PaymentPage