import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginPic from "../assets/login-pic.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Skeleton, Spin, message } from "antd";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(loginData);
    setIsLoading(true);

    try {
      const response = await axios.post(
        " https://checkout-barber-django-rest-api.onrender.com/api/login/",
        loginData
      );
      message.success("Login Successful");
      console.log("Login was successful:", response.data);
      // After logging in, the user is routed to the booking page
      // When you don't add the "/" before a Url you get www.current-Url/the link
      setIsLoading(false);

      navigate("/booking");
    } catch (error) {
      message.error("Login error: Invalid Credentials");
      console.error("Login Error:", error);
      setError(error);

      setIsLoading(false);
    }
  };
  {
    /* There's an issue with unsuccessful login...the Loading feature keeps loading until you refresh the page*/
  }
  if (isLoading) {
    return (
      <div>
        {/* // Default values shown */}
        {/* <l-tail-chase
      size="40"
      speed="1.75" 
      color="black" 
  ></l-tail-chase>*/}
        {/* <Skeleton paragraph={{
      rows: 15,
    }}></Skeleton>  */}
        <Spin spinning={isLoading} fullscreen></Spin>
      </div>
    );
  } else {
    <div>
      <Spin spinning={isLoading} fullscreen></Spin>
    </div>;
  }
  if (error) {
    return <div>Something went wrong. Please try again...</div>;
  }

  // const handleChange = (event) => {
  //   setLoginData({
  //     [event.target.username]: event.target.value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
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
                src={LoginPic}
                alt="A man shaving"
              ></img>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div class="login-container">
              <div class="Text">
                {/* Conditionally render success message */}

                <form class="form img-fluid" onSubmit={handleSubmit}>
                  <div class="flex-column">
                    <label>Username </label>
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
                      name="username"
                      type="text"
                      class="input"
                      placeholder="Enter your Username"
                      required
                      value={loginData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="flex-column">
                    <label>Password </label>
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
                      name="password"
                      type="password"
                      class="input"
                      placeholder="Enter your Password"
                      required
                      value={loginData.password}
                      onChange={handleChange}
                    />
                    <svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                    </svg>
                  </div>

                  <div class="flex-row">
                    <div>
                      <input type="checkbox" />
                      <label>Remember me </label>
                    </div>
                    <span class="span">
                      <a href="forgotPassword">Forgot password?</a>{" "}
                    </span>
                  </div>
                  <button class="button-submit" type="submit">
                    Sign In
                  </button>
                  <p class="p">
                    Don't have an account?{" "}
                    <span class="span">
                      <a href="register">Sign Up</a>
                    </span>
                  </p>
                  <p class="p line">Or With</p>

                  <div class="flex-row">
                    <button class="btn btn-outline-secondary btn-lg px-4">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        viewBox="0 0 52 52"
                        width="20"
                      >
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </svg>
                      Google
                    </button>
                    <button class="btn btn-outline-secondary btn-lg px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="40"
                        fill="currentColor"
                        class="bi bi-apple"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                      </svg>
                      Apple
                    </button>
                  </div>
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

export default Login;
