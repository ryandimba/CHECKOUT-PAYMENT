import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import barber from "../assets/paymentMethods2.jpg";
import { useBookingView } from "./Helpers";
import { userData } from './Helpers';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookingDetails() {
  const [promoCode, setPromoCode] = useState('');
  const { service } = useBookingView();
  const price = service.price - 100; // Assuming PromoCode is fixed at 100

  const { userID } = userData();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://checkout-barber-django-rest-api.onrender.com/api/service/byuserid/?user_id=${userID}&service=${service.service}&description=${service.description}&price=${price}`,
        // {
        //   user_id: userID,
        //   service_name: service.service,
        //   description: service.description,
        //   price: price
        // }
      );

      console.log("Booking was successful:", response.data);
      // After a successful booking, navigate to the profile page
      navigate("/profile");
    } catch (error) {
      console.error("Booking Error:", error);
    }
  };

  return (
    <>
      <Header />
      <hr />
      <div className="container">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <form onSubmit={handleSubmit}>
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">ID: {service.id}</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{service.service}</h6>
                  </div>
                  <span className="text-body-secondary">{service.price}</span>
                </li>
                {/* Additional list items for other services */}
                {/* <li>...</li> */}
              </ul>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <p><b>Description:</b></p>
                    <h6 className="my-0">{service.description}</h6>
                  </div>
                </li>
                {/* Additional list items for other services */}
                {/* <li>...</li> */}
              </ul>

              <div className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button type="submit" className="btn btn-secondary">
                    Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="Picture">
              <img
                className="img-fluid"
                src={barber}
                alt="A man shaving"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingDetails;
