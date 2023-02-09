import "./Header.module.css";
import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Header = () => {
  let counter = 0;
  const cartItemCount = useSelector(
    (state) => state.rootReducer.cartItemSlice.getCartData
  );

  cartItemCount.filter((count) => {
    counter += count.itemCount;
    return count;
  });

  return (
    <MaxWidthWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            paddingTop: "40px",
            fontSize: {
              xl: "24px",
              lg: "20px",
              sm: "20px",
              md: "20px",
              xs: "16px",
            },
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "30px",
              textTransform: "capitalize",
              color: "#FFC300",
              textDecoration: "none",
            }}
          >
            NoodleTown
          </Link>
        </Box>

        <Box
          sx={{
            marginLeft: {
              xl: "60%",
              lg: "60%",
              md: "50%",
              sm: "40%",
              xs: "10%",
            },
            paddingTop: "40px",
            fontSize: {
              xl: "24px",
              lg: "20px",
              sm: "20px",
              md: "20px",
              xs: "16px",
            },
          }}
        >
          <Link
            to="/categories"
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "30px",
              textTransform: "capitalize",
              color: "black",
              textDecoration: "none",
            }}
          >
            Menu
          </Link>
        </Box>
        <Box sx={{ paddingRight: { xl: "100px", lg: "100px" } }}>
          <Box
            sx={{
              position: "relative",
              top: "23px",
              left: { xl: "5px", lg: "5px", md: "5px", sm: "5px", xs: "5px" },
              width: "20px",
              height: "20px",
              borderRadius: "15px",
              background: "#FFA500",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              {counter}
            </Typography>
          </Box>
          <Box
            sx={{
              // marginRight: "10px",
              paddingTop: "20px",
              width: {
                xl: "35px",
                lg: "25px",
                md: "25px",
                sm: "20px",
                xs: "25px",
              },
              height: {
                xl: "40px",
                lg: "30px",
                md: "30px",
                sm: "25px",
                xs: "25px",
              },
            }}
          >
            <Link to="/cart" style={{}}>
              <img
                className="gfg"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "black",
                  width: "100%",
                }}
                src="images/Group6.png"
                alt="cart"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};

export default Header;
