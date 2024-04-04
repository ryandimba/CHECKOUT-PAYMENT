import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

//This block of code stores the logged in user's token to the session storage
export const storedUser = (response) => {
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      userID : response.data.user_profile_data.user_id,
      userName: response.data.user_profile_data.username,
      phoneNumber: response.data.user_profile_data.phone,
      token: response.data.token,
    })
  );
};

export const userData = () => {
  const stringified = sessionStorage.getItem("user") || '""';
  return JSON.parse(stringified || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { token } = userData();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return <Component></Component>;
};

export const useBookingView = () => {
  const { id: serviceID } = useParams();
  const [service, setservice] = useState({});

  useEffect(() => {
    if (service && service.data) {
      const { attributes } = service;
    }
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `https://quickshave.evah-audi.tech/api/services/details/byserviceid/?id=${serviceID}`
      );
      setservice(response.data);
      console.log("API DATA:", response.data);
    } catch (error) {
      console.log("API ERROR:", error);
    }
  };

  useEffect(() => {
    if (serviceID) {
      fetchBooking();
    }
  }, [serviceID]);
  return {
    service,
  };
};
