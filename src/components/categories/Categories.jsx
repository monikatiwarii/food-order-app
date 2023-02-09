import { Box, Typography } from "@mui/material";
import Header from "../header/Header";
import { Link, useNavigate } from "react-router-dom";
import { brandsData, foodList, trandingFood } from "../../data/data";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { cartItemAction } from "../../store/reducers/cartItemSlice";
import { useDispatch } from "react-redux";

const Categories = () => {
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
      <Header />
      <MaxWidthWrapper>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
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
            }}
          >
            Top brands for you
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflowX: "scroll",
            }}
          >
            {brandsData.map((data, index) => {
              return (
                <Box>
                  <Link to="/detailView" state={{ categoryData: data }}>
                    <Box
                      sx={{
                        width: {
                          xs: "100px",
                          md: "185px",
                          sm: "150px",
                        },
                        height: {
                          xs: "100px",
                          md: "185px",
                          sm: "150px",
                        },
                        position: "relative",
                        marginRight: "20px",
                        marginTop: "50px",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                        src={data.image}
                        alt=""
                      />
                    </Box>
                  </Link>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: { md: "20px", xs: "14px" },
                      lineHeight: "30px",
                      textTransform: "capitalize",
                      color: "#000000",
                      textAlign: "center",
                      paddingTop: "15px",
                    }}
                  >
                    {data.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: {
                xl: "50px",
                lg: "50px",
                md: "50px",
                sm: "20px",
                xs: "10px",
              },
              rowGap: "30px",
              marginTop: "90px",
            }}
          >
            {foodList.map((foodlist, index) => {
              return (
                <Box>
                  <Box
                    onClick={() => {
                      trandingFoodHandler(foodlist);
                    }}
                    sx={{
                      width: {
                        xl: "475px",
                        lg: "375px",
                        md: "270px",
                        sm: "350px",
                        xs: "285px",
                      },
                    }}
                  >
                    <img
                      src={foodlist.image}
                      style={{ width: "100%" }}
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
                        md: "20px",
                        sm: "20px",
                        xs: "16px",
                      },
                      lineHeight: "30px",
                      textTransform: "capitalize",
                      color: "#000000",
                      paddingTop: "10px",
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
                      lineHeight: "30px",
                      textTransform: "capitalize",
                      color: "#999999",
                      paddingTop: {
                        xl: "5px",
                        lg: "5px",
                        md: "5px",
                        sm: "5px",
                        xs: "0px",
                      },
                      paddingLeft: "8px",
                    }}
                  >
                    {foodlist.time}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            columnGap: {
              xl: "90px",
              lg: "80px",
              md: "50px",
              sm: "85px",
              xs: "18px",
            },
            flexWrap: "wrap",
            marginTop: "150px",
          }}
        >
          {trandingFood.map((trandingFoods) => {
            return (
              <Box>
                <Box
                  sx={{
                    width: {
                      xl: "445px",
                      lg: "360px",
                      md: "270px",
                      sm: "300px",
                      xs: "275px",
                    },
                  }}
                >
                  <img
                    src={trandingFoods.image}
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    translate: "18px -83px",
                  }}
                >
                  {trandingFoods.type}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    translate: "20px -83px",
                  }}
                >
                  {trandingFoods.places}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </MaxWidthWrapper>
    </>
  );
};

export default Categories;
