import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Rixa from "../assets/Rixa.jpeg";
import Evelynne from "../assets/Evelynne.jpeg";
import Abberh from "../assets/Abberh.jpeg";
import Handla from "../assets/Handla.jpeg";
import Tim from "../assets/Tim.jpeg";
import Dekaristian from "../assets/Dekaristian.jpeg";

function About() {
  return (
    <>
      <Header />
      <hr></hr>
      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <img
              src={Rixa}
              class="bd-placeholder-img rounded-circle"
              alt="Ryan"
              width="140"
              height="140"
            />

            <h2 class="fw-normal">Ryan Dimba</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="/">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div class="col-lg-4">
            <img
              src={Evelynne}
              class="bd-placeholder-img rounded-circle"
              alt="Evelynne"
              width="140"
              height="140"
            />
            <h2 class="fw-normal">Evelynne Akinyi</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="/">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div class="col-lg-4">
            <img
              src={Handla}
              class="bd-placeholder-img rounded-circle"
              alt=" Francis"
              width="140"
              height="140"
            />
            <h2 class="fw-normal">Duo Francis</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="/">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              src={Tim}
              class="bd-placeholder-img rounded-circle"
              alt="Timothy"
              width="140"
              height="140"
            />
            <h2 class="fw-normal">Timothy</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="/">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              src={Abberh}
              class="bd-placeholder-img rounded-circle"
              alt=" Abberh"
              width="140"
              height="140"
            />
            <h2 class="fw-normal">Abberh</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="/">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              src={Dekaristian}
              class="bd-placeholder-img rounded-circle"
              alt=" Dekristian"
              width="140"
              height="140"
            />
            <h2 class="fw-normal">Dekristian</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="/">
                View details »
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
