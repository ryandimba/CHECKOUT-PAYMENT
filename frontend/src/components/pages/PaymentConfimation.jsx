import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import barber from "../assets/paymentMethods2.jpg";
import axios from "axios";

function PaymentConfimation() {
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
        "https://checkout-barber-django-rest-api.onrender.com/api/get/users/"
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

      <div className="container">
        <div className="login-container">
          <div className="row">
            {/* PaymentConfimation */}
            <div class="row g-5">
              <div class="col-md-5 col-lg-4 order-md-last">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-primary">Your cart</span>
                  <span class="badge bg-primary rounded-pill">3</span>
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Product name</h6>
                      {/* <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Promo code"
                        />
                      </div> */}
                    </div>
                    <span class="text-body-secondary">Ksh 400</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Second product</h6>
                      {/* <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Promo code"
                        />
                      </div>{" "} */}
                    </div>
                    <span class="text-body-secondary">Ksh 1000</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Third item</h6>
                      {/* <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Promo code"
                        />
                      </div> */}
                    </div>
                    <span class="text-body-secondary">Ksh 700</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div class="text-success">
                      <h6 class="my-0">Promo code</h6>
                      <small>QUICKCODE</small>
                    </div>
                    <span class="text-success">−Ksh 100</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (KSH)</span>
                    <strong>Ksh 2000</strong>
                  </li>
                </ul>

                <form class="card p-2">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promo code"
                    />
                    <button type="submit" class="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-sm-12">
                {" "}
                <div class="Picture">
                  <img
                    className="img-fluid"
                    src={barber}
                    alt="A man shaving"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PaymentConfimation;
