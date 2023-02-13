import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isOrdered")) {
      console.log("isordered....");
    } else {
      navigate("/home");
    }
  }, []);
  return <Box>{children}</Box>;
};

export default AuthGuard;
