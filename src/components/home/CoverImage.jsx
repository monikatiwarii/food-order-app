import {
  Box,
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { states } from "../../data/data";
import { useSelector } from "react-redux";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const CoverImage = () => {
  let counter = 0;
  const cartItemCount = useSelector(
    (state) => state.rootReducer.cartItemSlice.getCartData
  );

  cartItemCount.filter((count) => {
    counter += count.itemCount;
    return count;
  });
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            xl: "543px",
            lg: "423px",
            md: "300px",
            sm: "226px",
            xs: "120px",
          },
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="images/Rectangle 1.png"
          alt=""
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "0px",
          width: "100%",
          height: {
            xl: "543px",
            lg: "423px",
            md: "300px",
            sm: "226px",
            xs: "120px",
          },
          background: "rgba(0, 0, 0, 0.4)",
        }}
      ></Box>
      <MaxWidthWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: {
              xl: "-543px",
              lg: "-430px",
              md: "-320px",
              sm: "-248px",
              xs: "-155px",
            },
            width: "100%",
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
                xs: "12px",
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
                xs: "20%",
              },
              paddingTop: "40px",
              fontSize: {
                xl: "24px",
                lg: "20px",
                sm: "20px",
                md: "20px",
                xs: "12px",
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
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Menu
            </Link>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Box
              sx={{
                position: "relative",
                top: "23px",
                left: {
                  xl: "5px",
                  lg: "5px",
                  md: "5px",
                  sm: "5px",
                  xs: "5px",
                },
                width: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "15px",
                },
                height: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "15px",
                },
                borderRadius: "15px",
                background: "#FFA500",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: {
                    xl: "13px",
                    lg: "13px",
                    md: "13px",
                    sm: "13px",
                    xs: "10px",
                  },
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
                paddingTop: "20px",
                width: {
                  xl: "35px",
                  lg: "25px",
                  md: "25px",
                  sm: "20px",
                  xs: "20px",
                },
                height: {
                  xl: "40px",
                  lg: "30px",
                  md: "30px",
                  sm: "25px",
                  xs: "20px",
                },
              }}
            >
              <Link to="/cart">
                <img
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "13px",
                    lineHeight: "5px",
                    color: "black",
                    width: "100%",
                  }}
                  src="images/Group 6.png"
                  alt="cart"
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </MaxWidthWrapper>
      <Box>
        <Box
          sx={{
            position: "absolute",
            top: {
              xl: "300px",
              lg: "200px",
              md: "130px",
              sm: "105px",
              xs: "55px",
            },
            margin: {
              xl: "0px 40%",
              lg: "0px 37%",
              md: "0px 36%",
              sm: "0px 34%",
              xs: "0px 30%",
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: {
                xl: "44px",
                lg: "44px",
                md: "30px",
                sm: "24px",
                xs: "10px",
              },
              lineHeight: {
                xl: "72px",
                lg: "72px",
                md: "65px",
                sm: "30px",
                xs: "10px",
              },
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            NOODLETOWN
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: {
                xl: "22px",
                lg: "22px",
                md: "18px",
                sm: "16px",
                xs: "8px",
              },
              lineHeight: "30px",
              textTransform: "capitalize",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            discover best food around you
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: {
              xl: "642px",
              lg: "600px",
              md: "450px",
              sm: "400px",
              xs: "216px",
            },
            height: {
              xl: "65px",
              lg: "65px",
              md: "50px",
              sm: "44px",
              xs: "25px",
            },
            margin: {
              xl: "0px 35%",
              lg: "0px 30%",
              md: "0px 30%",
              sm: "0px 25%",
              xs: "0px 20%",
            },
            top: {
              xl: "-100px",
              lg: "-100px",
              md: "-80px",
              sm: "-65px",
              xs: "-30px",
            },
            background: "#D9D9D9",
            borderRadius: "8px",
          }}
        >
          <TextField
            sx={{
              padding: {
                xl: "15px 0 15px 30px",
                lg: "15px 0 15px 30px",
                md: "10px 0 15px 30px",
                sm: "10px 0 8px 5px",
              },
              fontSize: {
                xl: "22px",
                lg: "20px",
                md: "14px",
                sm: "10px",
                xs: "8px",
              },
            }}
            id="standard-select-currency"
            select
            defaultValue="Surat"
            variant="standard"
            InputProps={{ disableUnderline: true }}
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Divider
            sx={{
              width: "18px",
              height: "0px",
              marginLeft: {
                xl: "30px",
                lg: "30px",
                md: "10px",
                sm: "2px",
                xs: "2px",
              },
              marginTop: {
                xl: "30px",
                lg: "30px",
                md: "25px",
                sm: "20px",
                xs: "10px",
              },
              border: "1px solid #000000",
              transform: "rotate(90deg)",
            }}
            orientation="vertical"
            flexItem
          />
          <IconButton type="button" aria-label="search">
            <SearchIcon
              sx={{
                width: {
                  xl: "24px",
                  lg: "24px",
                  md: "24px",
                  sm: "24px",
                  xs: "15px",
                },
                paddingLeft: {
                  xl: "60px",
                  lg: "60px",
                  md: "10px",
                  sm: "5px",
                  xs: "0px",
                },
              }}
            />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              fontSize: {
                xl: "22px",
                lg: "20px",
                md: "14px",
                sm: "10px",
                xs: "8px",
              },
            }}
            placeholder="search for restraunt, cuisine, place"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default CoverImage;
