import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import barber from "../assets/barber1.jpg";


function NoPage() {
  return (
    <>
      <Header></Header>
      <hr></hr>
      <div className="container">
        <h1 className="text-center">404 Page</h1>
        <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}>
      <img
        src={barber}
        alt="Your Image"
        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
        }}
      >
        {/* <h1>404 Page</h1> */}
        <p>The page you're trying to access doesn't exist</p>
                  Click here to go back <a href="/"><i>home</i></a>

      </div>
    </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default NoPage;
