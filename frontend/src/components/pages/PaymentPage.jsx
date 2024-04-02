import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import paymentMethods from "../assets/paymentMethods2.jpg";
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
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cash-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
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
                      xmlns="http://www.w3.org/2000/svg"
                      // width="16"
                      height="20"
                      fill="currentColor"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
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

                  <div class="flex-row"></div>
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
  );
}

export default PaymentPage;
