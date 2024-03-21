import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("user", "");
    navigate("/login");
  }, [navigate]);

  return null;
}

export default Logout;
