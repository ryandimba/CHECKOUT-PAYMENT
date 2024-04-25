import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import barber from "../assets/paymentMethods2.jpg";
import { useBookingView } from "./Helpers";
import { userData } from "./Helpers";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Skeleton, Spin, message } from "antd";


function BookingDetails() {
  const [promoCode, setPromoCode] = useState("");
  const { service } = useBookingView();
  const price = service.price - 100; // Assuming PromoCode is fixed at 100
  const [quantity, setQuantity] = useState("");

  const { userID } = userData();
  console.log(userID);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://quickshave.evah-audi.tech/api/service/byuserid/?user_id=${userID}&service=${service.service}&description=${service.description}&price=${price}&service_image=${service.service_image}`
        // {
        //   user_id: userID,
        //   service_name: service.service,
        //   description: service.description,
        //   price: price
        // }
      );

      console.log("Booking was successful:", response.data);
      // After a successful booking, navigate to the profile page
      message.success("Booking Successful");
      message.success("Booking Successful");

      navigate("/booking");
    } catch (error) {
      console.error("Booking Error:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 const amountPayable = service.price
 console.log(amountPayable);
  return (
    <>
      <Header />
      <hr />
      <div className="container">
        <div class="card" style={{ width: 300 }}>
          <img
            src={service.service_image}
            class="card-img-top"
            style={{ width: 300 }}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{service.service}</h5>
            <p class="card-text">{service.description}.</p>
            <p>
              <b>Amount: Ksh {service.price}</b>
            </p>
            <a href="#" class="btn btn-danger">
              Cancel
            </a>
            <a href="#" class="btn btn-primary">
              Book
            </a>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <form onSubmit={handleSubmit}>
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  ID: {service.id}
                </span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{service.service}</h6>
                  </div>
                  <span className="text-body-secondary">{service.price}</span>
                </li>
              </ul>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <p>
                      <b>Description:</b>
                    </p>
                    <h6 className="my-0">{service.description}</h6>
                  </div>
                </li>
              </ul>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Number of Persons</h6>
                  </div>
                  <span className="text-body-secondary">
                    <input
                      name="username"
                      type="text"
                      class="input"
                      placeholder="Number"
                      // required
                      onChange={handleChange}
                    />
                  </span>
                </li>
              </ul>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">
                      Amount:{" "}
                      <span className="text-body-secondary">
                       Ksh {service.price}
                      </span>
                    </h6>
                  </div>
                  <span className="text-body-secondary"></span>
                </li>
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
                  <button type="submit" className="btn btn-primary">
                    Proceed to Book
                  </button>
                  <Link to={"/booking"} className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="Picture">
              <img
                className="img-fluid"
                src={service.service_image}
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
