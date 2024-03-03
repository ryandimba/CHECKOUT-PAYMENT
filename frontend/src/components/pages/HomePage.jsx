import React from "react";
import barber from "../assets/barber3.jpg";
import Footer from "./Footer";
import Header from "./Header";
// import Barber from "../assets/barber3.jpg";

function HomePage() {
  return (
    <>
      <Header />
      <div>
        <img src={barber} alt="" className="barber"></img>
      </div>
      <div class="position-relative"></div>

      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">Quick Shave</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Our Barber Shop specializes in classic cuts, beard trims, hot towel
            shaves and quality grooming products. Our team of professional and
            knowledgeable barbers work to help you achieve your best look. We’re
            a little bit old school with a modern touch. We thrive on great
            music, thoughtful conversation and fostering relationship in our
            community. We’ve created a laid back environment for your regular
            dose of self-care.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/booking">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Book Now
              </button>
            </a>
            <a href="services">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                View our services
              </button>
            </a>
          </div>
          <hr></hr>
        </div>
      </div>

      <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom">Our Uniqueness</h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-emphasis">
              Left-aligned title explaining these awesome features
            </h2>
            <p class="text-body-secondary">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="/" class="btn btn-primary btn-lg">
              Primary button
            </a>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em">
                    <i class="bi bi-arrow-up-right-square"></i>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em">
                    <i class="bi bi-arrow-up-right-square"></i>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">Convenience</h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em">
                    <i class="bi bi-arrow-up-right-square"></i>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em">
                    <i class="bi bi-arrow-up-right-square"></i>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container"></div>

      <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Border hero with cropped image and shadows
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                href="login"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Book for Ksh 400
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
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
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
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
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
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
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
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
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
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default HomePage;
