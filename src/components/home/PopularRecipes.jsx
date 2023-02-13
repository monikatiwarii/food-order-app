import { Box, Button, Typography } from "@mui/material";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { foodtype } from "../../data/data";
import { useState } from "react";
import { cartItemAction } from "../../store/reducers/cartItemSlice";
import { useDispatch } from "react-redux";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const PopularRecipes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [foodList, setFoodList] = useState(foodtype[0].list);
  const foodItemHandler = (data) => {
    setFoodList(data.list);
  };

  const foodDataHandler = (data) => {
    foodList.map((typedata) => {
      if (typedata.id === data.id) {
        typedata = {
          ...typedata,
          addToCart: true,
          itemCount: data.itemCount + 1,
        };
        dispatch(cartItemAction.setCartData(typedata));
        navigate("/cart");
      }
      return typedata;
    });
  };

  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "110px",
        }}
      >
        {!matches ? <img src="images/Vector2.png" alt="" /> : ""}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {
              xl: "48px",
              lg: "48px",
              md: "48px",
              sm: "38px",
              xs: "24px",
            },
            lineHeight: {
              xl: "150px",
              lg: "150px",
              md: "58px",
              sm: "100px",
              xs: "100px",
            },
            marginLeft: {
              xl: "0px",
              lg: "0px",
              md: "0px",
              sm: "0px",
              xs: "55px",
            },
            color: "#000000",
          }}
        >
          Popular Recipes
        </Typography>
        {!matches ? <img src="images/Vector 3.png" alt="" /> : ""}
      </Box>
      <MaxWidthWrapper>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {foodtype.map((button) => {
            return (
              <Button
                onClick={() => {
                  foodItemHandler(button);
                }}
                sx={{
                  marginLeft: {
                    xl: "20px",
                    lg: "20px",
                    md: "20px",
                    sm: "20px",
                    xs: "20px",
                  },
                  marginTop: "10px",
                  width: {
                    xl: "161px",
                    lg: "161px",
                    md: "161px",
                    sm: "120px",
                    xs: "120px",
                  },
                  height: {
                    xl: "67px",
                    lg: "67px",
                    md: "67px",
                    sm: "67px",
                    xs: "50px",
                  },
                  backgroundColor: "#ECEEF6",
                  borderRadius: "45px",
                  border: "0px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {
                    xl: "16px",
                    lg: "16px",
                    md: "16px",
                    sm: "16px",
                    xs: "12px",
                  },
                  lineHeight: "22px",
                  textAlign: "center",
                  color: "black",
                  // "&:hover": {
                  //   backgroundColor: "#F6B716",
                  //   color: "white",
                  // },
                  // "&:active": {
                  //   backgroundColor: "#F6B716",
                  //   color: "white",
                  // },
                  "&:focus": {
                    backgroundColor: "#F6B716",
                    color: "white",
                  },
                }}
              >
                {button.name}
              </Button>
            );
          })}
        </Box>
      </MaxWidthWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "660px",
          maxWidth: "155%",
          overflowX: "scroll",
          textAlign: "center",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {foodList.map((food, index) => {
          return (
            <Box
              sx={{
                position: "relative",
                boxSizing: "border-box",
                width: { xl: "310px", lg: "310px", md: "310px", sm: "300px" },
                height: {
                  xl: "493px",
                  lg: "493px",
                  md: "493px",
                  sm: "493px",
                  xs: "490px",
                },
                background: "#FFFFFF",
                border: "2px solid #ECEEF7",
                marginLeft: "30px",
                borderRadius: "20px",
                padding: "20px",
                "&:hover": {
                  border: "2px solid  #F6B716;",
                  "& #shoppingBag": {
                    backgroundColor: " #F6B716;",
                    color: "white",
                  },
                  "& #shoppingBagBorder": {
                    borderBottom: "2px solid #F6B716",
                    borderRight: "2px solid #F6B716",
                  },
                },
              }}
              style={{ marginTop: "115px" }}
            >
              {food.popular && (
                <Typography
                  sx={{
                    position: "absolute",
                    left: "22px",
                    top: "6px",
                    width: "60px",
                    height: "20px",
                    background: "#191F2C",
                    color: "#FFFFFF",
                    padding: "6px",
                    boxShadow: "0px 4px 8px rgba(25, 31, 44, 0.25)",
                    borderRadius: "3px",
                  }}
                >
                  Popular
                </Typography>
              )}
              <Box
                sx={{
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "200px",
                  },
                }}
                onClick={() => {
                  foodDataHandler(food);
                }}
              >
                <img src={food.image} alt="" />
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    paddingTop: "18px",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#000000",
                    marginBottom: "0px",
                  }}
                >
                  {food.name}
                </Typography>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    paddingLeft: "0px",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    textAlign: "right",
                    color: "#000000",
                  }}
                >
                  {food.time}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "#000000",
                  paddingLeft: "18.5px",
                  marginTop: "10px",
                }}
              >
                {food.items}
              </Typography>
              <Typography
                sx={{
                  paddingTop: "20px",
                  height: "41px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "28px",
                  lineHeight: "34px",
                  textAlign: "center",
                  color: "#121146",
                }}
              >
                {food.weight}
              </Typography>
              <Button
                id="shoppingBag"
                sx={{
                  position: "absolute",
                  width: "34px",
                  minWidth: "34px",
                  right: {
                    xl: "136px",
                    lg: "136px",
                    md: "136px",
                    sm: "132px",
                    xs: "104px",
                  },
                  top: "467px",
                  color: "black",
                  background: "#FFFFFF",
                  borderRadius: "59px",
                  border: "1px solid #ECEEF7",
                  zIndex: "2",
                }}
              >
                <ShoppingBagIcon />
              </Button>
              <Box
                id="shoppingBagBorder"
                sx={{
                  position: "absolute",
                  width: "50px",
                  height: "50px",
                  borderBottom: "2px solid #ECEEF7",
                  borderRight: "2px solid #ECEEF7",
                  borderBottomRightRadius: "15px",
                  top: "100%",
                  left: "50%",
                  marginLeft: "-25px",
                  content: `'""'`,
                  transform: "rotate(45deg)",
                  marginTop: "-25px",
                  backgroundColor: "#FFFFFF",
                  zIndex: 1,
                }}
              ></Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default PopularRecipes;
