import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Barber from "../assets/barber3.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "./Helpers";

function Booking() {
  const [records, setRecords] = useState([]);
  const [loading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

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
        `${BASE_URL}api/get/services/`
      )
      .then((response) => {
        // Set records state with data from the response
        setRecords(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        // Handle any errors
        setError("Error fetching data")
        setIsLoading(false)
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts

  if (loading){
    return <div className="" style={{textAlign:"center"}}>Loading..</div>
  }

  if (error){
    return <div>{error}</div>
  }
  return (
    <>
      <Header></Header>
      <div>
        <div class="container my-5">
          <form>
            {records.length == 0 ?
            <div>No data found</div>
            :
            records.map((list, index) => (
              <div
                key={index}
                class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
              >
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                    {list.service}{" "}
                  </h1>
                  <p class="lead">{list.description}</p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Link
                      to={`/bookingDetails/${list.id}&service=${list.service}&amount=${list.price}`}
                      className="btn btn-primary btn-lg px-4 me-md-2 fw-bold submit"
                    >
                      Ksh {list.price}
                    </Link>

                    <a
                      href="blog"
                      class="btn btn-outline-secondary btn-lg px-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img class="rounded-lg-3" src={list.service_image} alt="" width="320" />
                </div>
              </div>
            ))}
          </form>
        </div>
        {/* <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                Border hero with cropped image and shadows
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a
                  href="login"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Book for Ksh 500
                </a>
                <a href="blog" class="btn btn-outline-secondary btn-lg px-4">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src={Barber} alt="" width="720" />
            </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                Border hero with cropped image and shadows
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a
                  href="login"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Book for Ksh 700
                </a>
                <a href="blog" class="btn btn-outline-secondary btn-lg px-4">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src={Barber} alt="" width="720" />
            </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                Border hero with cropped image and shadows
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a
                  href="login"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Book Ksh 1000
                </a>
                <a href="blog" class="btn btn-outline-secondary btn-lg px-4">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src={Barber} alt="" width="720" />
            </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                Border hero with cropped image and shadows
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a
                  href="login"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Book for Ksh 200
                </a>
                <a href="blog" class="btn btn-outline-secondary btn-lg px-4">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src={Barber} alt="" width="720" />
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Booking;
