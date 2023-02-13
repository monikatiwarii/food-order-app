import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { foodList } from "../../data/data";
import { cartItemAction } from "../../store/reducers/cartItemSlice";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const FoodItemSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const trandingFoodHandler = (data) => {
    foodList.map((typedata) => {
      if (typedata.id === data.id) {
        typedata = {
          ...typedata,
          addToCart: true,
        };
        dispatch(cartItemAction.setCartData(typedata));
        navigate("/cart");
      }
      return typedata;
    });
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: {
              xl: "28px",
              lg: "28px",
              md: "28px",
              sm: "24px",
              xs: "20px",
            },
            lineHeight: "48px",
            color: "#000000",
            marginTop: "50px",
          }}
        >
          Food according to weather
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            marginTop: {
              xl: "50px",
              lg: "40px",
              md: "30px",
              sm: "20px",
              xs: "10px",
            },
          }}
        >
          {foodList.map((foodlist, index) => {
            return (
              <Grid
                item
                xs={6}
                sm={4}
                md={4}
                key={index}
                onClick={() => {
                  trandingFoodHandler(foodlist);
                }}
              >
                <Box>
                  <img
                    src={foodlist.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: {
                      xl: "20px",
                      lg: "20px",
                      md: "18px",
                      sm: "18px",
                      xs: "16px",
                    },
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    color: "#000000",
                    paddingTop: {
                      xl: "10px",
                      lg: "10px",
                      md: "5px",
                      sm: "3px",
                      xs: "2px",
                    },
                    paddingLeft: "8px",
                  }}
                >
                  {foodlist.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "16px",
                      xs: "14px",
                    },
                    lineHeight: {
                      xl: "30px",
                      lg: "30px",
                      md: "20px",
                      sm: "20px",
                      xs: "20px",
                    },
                    textTransform: "capitalize",
                    color: "#999999",
                    paddingTop: {
                      xl: "5px",
                      lg: "5px",
                      md: "3px",
                      sm: "2px",
                      xs: "0px",
                    },
                    paddingLeft: "8px",
                  }}
                >
                  {foodlist.time}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default FoodItemSection;
