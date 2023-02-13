import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthComponent = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      console.log("isloggedin");
    } else {
      navigate("/login");
    }
  }, []);
  return <Box>{children}</Box>;
};

export default AuthComponent;
