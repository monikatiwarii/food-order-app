import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import AuthComponent from "../common/AuthComponent";
import AuthGuard from "../common/AuthGuard";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const OrderSuccessfull = () => {
  const orderHandler = () => {
    localStorage.removeItem("isOrdered");
  };
  return (
    <AuthComponent>
      <AuthGuard>
        <MaxWidthWrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "40%",
                  sm: "40%",
                  xs: "100%",
                },
              }}
            >
              <img
                src="images/successfully-done.gif"
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
            {/* <Box> */}
            <Link
              onClick={orderHandler}
              to="/home"
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "24px",
                textAlign: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <img
                style={{ width: "40px", marginRight: "20px" }}
                src="images/backtohome.png"
                alt=""
              />
              Back to Home
            </Link>
            {/* </Box> */}
          </Box>
        </MaxWidthWrapper>
      </AuthGuard>
    </AuthComponent>
  );
};

export default OrderSuccessfull;
