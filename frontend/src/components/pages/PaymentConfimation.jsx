import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import barber from "../assets/paymentMethods2.jpg";
import axios from "axios";


function PaymentConfimation() {
  const [records, setRecords] = useState([])

  // useEffect(() =>{
    
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(json =>console.log(json))
  //   .then(data => setRecords(data))
  //   .catch(err => console.log(err))
  // })
console.log(records)
  useEffect(() => {
    // Use Axios to fetch data
    axios.get('https://checkout-barber-django-rest-api.onrender.com/api/get/users/')
      .then(response => {
        // Set records state with data from the response
        setRecords(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts
  return (
    <>
      <Header></Header>
      <hr></hr>
      <p></p>
        <table class="table table-striped table-responsive{-sm|-md|-lg|-xl|-xxl}">
  <thead>
    <tr>
      <th scope="col">ID#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Location</th>
      <th scope="col">Username</th>
      <th scope="col">BirthDate</th>
      <th scope="col">Service</th>
      <th scope="col">Booking Date</th>




    </tr>
  </thead>
  <tbody>

  {records.map((list, index) =>(
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.fullname}</td>
                <td>{list.phone}</td>
                <td>{list.location}</td>
                <td>{list.username}</td>
                <td>{list.birthdate}</td>
                <td>{list.updated_at}</td>
                <td>{list.booking_date}</td>
                 </tr>
            ))}
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
{records.map((list, index) =>(
              <div key={index}>
                <td>{list.id}</td>

                <td>My website is {list.website}</td>
                 </div>
            ))}

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
          </div><hr></hr>

          {/* <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">
                Username
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                  required=""
                />
                <div class="invalid-feedback">Your username is required.</div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">
                Email <span class="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required=""
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">
                Address 2 <span class="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">
                Country
              </label>
              <select class="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">
                State
              </label>
              <select class="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <hr class="my-4"></hr>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address" />
            <label class="form-check-label" for="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" />
            <label class="form-check-label" for="save-info">
              Save this information for next time
            </label>
          </div>

          <hr class="my-4"></hr>

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                checked=""
                required=""
              />
              <label class="form-check-label" for="credit">
                Credit card
              </label>
            </div>
            <div class="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required=""
              />
              <label class="form-check-label" for="debit">
                Debit card
              </label>
            </div>
            <div class="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required=""
              />
              <label class="form-check-label" for="paypal">
                PayPal
              </label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">
                Name on card
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small class="text-body-secondary">
                Full name as displayed on card
              </small>
              <div class="invalid-feedback">Name on card is required</div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">
                Credit card number
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">
                Expiration
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Expiration date required</div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">
                CVV
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>

          <hr class="my-4"></hr>

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PaymentConfimation;
