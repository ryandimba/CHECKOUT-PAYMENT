import HomePage from "./components/pages/HomePage";
import Blog from "./components/pages/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Booking from "./components/pages/Booking";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PaymentPage from "./components/pages/PaymentPage";
import ForgotPassword from "./components/pages/ForgotPassword";
import Barbers from "./components/pages/Barbers";
import BarberProfile from "./components/pages/BarberProfile";
import PaymentConfimation from "./components/pages/PaymentConfimation";
import NoPage from "./components/pages/NoPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="blog" element={<Blog></Blog>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="booking" element={<Booking></Booking>}></Route>
          <Route path="services" element={<Services></Services>}></Route>
          <Route path="gallery" element={<Gallery></Gallery>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route path="forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="barbers" element={<Barbers></Barbers>}></Route>
          <Route path="barbers/id:" element={<BarberProfile></BarberProfile>}></Route>
          <Route path="paymentConfirmation" element={<PaymentConfimation></PaymentConfimation>}></Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;
