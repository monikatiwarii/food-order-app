import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Error = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Box
          sx={{
            width: { xl: "50%", lg: "50%", md: "40%", sm: "40%", xs: "100%" },
            margin: "auto",
            height: { xl: "50%", lg: "50%", md: "40%", sm: "40%", xs: "100%" },
          }}
        >
          <img src="images/error.jpg" alt="" style={{ width: "100%" }} />
        </Box>
        <Box>
          <Link
            to="/"
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
            />
            Back to Home
          </Link>
        </Box>
      </MaxWidthWrapper>
    </>
  );
};

export default Error;
