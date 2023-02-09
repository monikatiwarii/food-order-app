import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Button from "@mui/material/Button";
import { menus, brandsData } from "../../data/data";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartItemAction } from "../../store/reducers/cartItemSlice";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const DetailView = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { categoryData } = location.state;

  const [categoryWiseData, setCategoryWiseData] = useState([]);
  const [typeName, setTypeName] = useState("");

  useEffect(() => {
    setCategoryWiseData(categoryData.types[0].list);
  }, []);

  const typeNameHandler = (data) => {
    setTypeName(data);
    setCategoryWiseData(data.list);
  };

  const addToCartHandler = (data) => {
    const updatedData = categoryWiseData.map((typedata) => {
      if (typedata.id === data.id) {
        typedata = {
          ...typedata,
          addToCart: true,
          itemCount: data.itemCount + 1,
        };
        dispatch(cartItemAction.setCartData(typedata));
      }
      return typedata;
    });
    setCategoryWiseData(updatedData);
  };

  const incrementItemCount = (data) => {
    const updatedData = categoryWiseData.map((typedata) => {
      if (typedata.id === data.id) {
        typedata = {
          ...typedata,
          itemCount: data.itemCount + 1,
        };
        dispatch(cartItemAction.setCartData(typedata));
      }

      return typedata;
    });

    setCategoryWiseData(updatedData);
  };

  const decrementItemCount = (data) => {
    const updatedData = categoryWiseData.map((typedata) => {
      if (typedata.id === data.id) {
        typedata = {
          ...typedata,
          itemCount: data.itemCount - 1,
          subtotal: typedata.itemCount * data.price,
        };
        dispatch(cartItemAction.setCartData(typedata));
      }

      return typedata;
    });
    setCategoryWiseData(updatedData);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          gap: { xl: "12px", lg: "12px", md: "12px", sm: "12px", xs: "5px" },
          paddingTop: "20px",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "56%",
              lg: "63%",
              md: "101%",
              sm: "133%",
              xs: "246%",
            },
            height: {
              xl: "100%",
              lg: "100%",
            },
          }}
        >
          <img
            style={{
              width: "100%",
              height: "90%",
            }}
            src="images/Rectangle141.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xl: "8px", lg: "8px", md: "12px", sm: "5px", xs: "2px" },
          }}
        >
          <Box
            sx={{
              width: {
                xl: "100%",
                lg: "100%",
              },
              height: {
                xl: "100%",
                lg: "98%",
              },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="images/Rectangle151.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: {
                xl: "100%",
                lg: "100%",
              },
              height: { xl: "100%", lg: "93%" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="images/Rectangle161.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <MaxWidthWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
            paddingLeft: {
              xl: "368px",
              lg: "250px",
              md: "120px",
              sm: "20px",
              xs: "20px",
            },
            paddingTop: "25px",
          }}
        >
          <Box
            sx={{
              width: {
                xl: "187px",
                lg: "187px",
                md: "187px",
                sm: "187px",
                xs: "190px",
              },
              paddingLeft: {
                xl: "0px",
                lg: "0px",
                md: "0px",
                sm: "0px",
                xs: "55px",
              },
            }}
          >
            <img src={categoryData.image} style={{ width: "100%" }} alt="" />
          </Box>
          <Box
            sx={{
              paddingLeft: {
                xl: "30px",
                lg: "30px",
                md: "30px",
                sm: "30px",
                xs: "10px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: {
                  xl: "24px",
                  lg: "24px",
                  md: "24px",
                  sm: "20px",
                  xs: "22px",
                },
                lineHeight: "36px",
                textTransform: "capitalize",
                color: "#000000",
                paddingTop: "20px",
              }}
            >
              {categoryData.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                columnGap: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "0px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: {
                    xl: "14px",
                    lg: "14px",
                    md: "14px",
                    sm: "14px",
                    xs: "12px",
                  },
                  lineHeight: "20px",
                  textTransform: "capitalize",
                  color: "#999999",
                  paddingTop: "2px",
                }}
              >
                {categoryData.items}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: {
                    xl: "14px",
                    lg: "14px",
                    md: "14px",
                    sm: "14px",
                    xs: "12px",
                  },
                  lineHeight: "20px",
                  textTransform: "capitalize",
                  color: "#999999",
                }}
              >
                Average Cost: {categoryData.cost}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: {
                  xl: "14px",
                  lg: "14px",
                  md: "14px",
                  sm: "14px",
                  xs: "16px",
                },
                lineHeight: "36px",
                textTransform: "capitalize",
                color: "#999999",
              }}
            >
              {categoryData.address}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: {
                  xl: "14px",
                  lg: "14px",
                  md: "14px",
                  sm: "12px",
                  xs: "16px",
                },
                lineHeight: "30px",
                textTransform: "capitalize",
                color: "#999999",
              }}
            >
              <span style={{ color: "#C84B11" }}>Open now </span>
              {categoryData.time}(Today)
            </Typography>
            <Box>
              <Button
                sx={{
                  width: {
                    xl: "140px",
                    lg: "140px",
                    md: "140px",
                    sm: "120px",
                    xs: "100px",
                  },
                  height: "35px",
                  fontSize: {
                    xl: "14px",
                    lg: "14px",
                    md: "14px",
                    sm: "12px",
                    xs: "10px",
                  },
                  textAlign: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "#FFC300",
                  marginTop: "10px",
                  color: "#ffffff",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#FFC300",
                    color: "#ffffff",
                  },
                }}
              >
                order online
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: {
                    xl: "140px",
                    lg: "140px",
                    md: "140px",
                    sm: "120px",
                    xs: "100px",
                  },
                  height: "35px",
                  fontSize: {
                    xl: "14px",
                    lg: "14px",
                    md: "14px",
                    sm: "14px",
                    xs: "10px",
                  },
                  textAlign: "center",
                  justifyContent: "flex-start",
                  borderColor: "#FFC300",
                  marginTop: "10px",
                  color: "black",
                  marginRight: "20px",
                  "&:hover": {
                    borderColor: "#FFC300",
                    background: "white",
                  },
                }}
              >
                directions
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: {
                    xl: "140px",
                    lg: "140px",
                    md: "140px",
                    sm: "120px",
                    xs: "100px",
                  },
                  height: "35px",
                  textAlign: "center",
                  fontSize: {
                    xl: "14px",
                    lg: "14px",
                    md: "14px",
                    sm: "12px",
                    xs: "10px",
                  },
                  justifyContent: "flex-start",
                  borderColor: "#FFC300",
                  marginTop: "10px",
                  color: "black",
                  marginRight: "10px",

                  "&:hover": {
                    borderColor: "#FFC300",
                    background: "white",
                  },
                }}
              >
                share
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "36px",
              textTransform: "capitalize",
              color: "#000000",
              paddingLeft: {
                xl: "368px",
                lg: "250px",
                md: "125px",
                sm: "30px",
                xs: "30px",
              },
              paddingTop: "80px",
            }}
          >
            Menu
          </Typography>
          <Box
            sx={{
              display: "flex",
              paddingLeft: {
                xl: "368px",
                lg: "250px",
                md: "125px",
                sm: "30px",
                xs: "30px",
              },
              paddingTop: {
                xl: "50px",
                lg: "50px",
                md: "50px",
                sm: "50px",
                xs: "50px",
              },
              columnGap: {
                xl: "90px",
                lg: "80px",
                md: "80px",
                sm: "80px",
                xs: "30px",
              },
              flexWrap: "wrap",
            }}
          >
            {menus.map((menu) => {
              return (
                <Box>
                  <Box
                    sx={{
                      width: {
                        xl: "284px",
                        lg: "284px",
                        md: "284px",
                        sm: "284px",
                        xs: "284px",
                      },
                      paddingTop: "20px",
                    }}
                  >
                    <img src={menu.image} style={{ width: "100%" }} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: {
                        xl: "16px",
                        lg: "16px",
                        md: "16px",
                        sm: "16px",
                        xs: "18px",
                      },
                      lineHeight: "24px",
                      textTransform: "capitalize",
                      color: "#000000",
                      paddingLeft: "5px",
                      paddingTop: "10px",
                    }}
                  >
                    {menu.type}
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
              fontSize: "24px",
              lineHeight: "36px",
              textTransform: "capitalize",
              color: "#000000",
              paddingLeft: {
                xl: "368px",
                lg: "250px",
                md: "125px",
                sm: "30px",
                xs: "30px",
              },
              paddingTop: "100px",
            }}
          >
            Order Online
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
            }}
          >
            {brandsData.map((pizzaData) => {
              if (pizzaData.id === categoryData.id) {
                return (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: {
                          xl: "column",
                          lg: "column",
                          md: "column",
                          sm: "column",
                          xs: "row",
                        },
                        paddingLeft: {
                          xl: "368px",
                          lg: "250px",
                          md: "125px",
                          sm: "30px",
                          xs: "30px",
                        },
                        rowGap: "10px",
                        paddingTop: "50px",
                      }}
                    >
                      {pizzaData.types.map((types) => {
                        return (
                          <Button
                            onClick={() => {
                              typeNameHandler(types);
                            }}
                            sx={{
                              width: {
                                xl: "245px",
                                lg: "245px",
                                md: "200px",
                                sm: "200px",
                                xs: "190px",
                              },
                              height: "50px",
                              textAlign: "left",
                              justifyContent: "flex-start",
                              "&:hover": {
                                backgroundColor: "#FFC300",
                              },
                            }}
                            variant=""
                          >
                            {types.name}({types.list.length})
                          </Button>
                        );
                      })}
                    </Box>

                    <Box
                      sx={{
                        width: {
                          xl: "60px",
                          lg: "60px",
                          md: "60px",
                          sm: "50px",
                          xs: "25px",
                        },
                      }}
                    >
                      <Divider
                        sx={{
                          width: {
                            xl: "677px",
                            lg: "677px",
                            md: "677px",
                            sm: "677px",
                            xs: "387px",
                          },
                          marginTop: {
                            xl: "370px",
                            lg: "370px",
                            md: "370px",
                            sm: "370px",
                            xs: "50px",
                          },
                          marginLeft: {
                            xl: "-330px",
                            lg: "-330px",
                            md: "-330px",
                            sm: "-330px",
                            xs: "0px",
                          },
                          marginRight: "70px",
                          border: "1px solid #FFC200",
                          marginBottom: "100px",
                          transform: {
                            xl: "rotate(90deg)",
                            lg: "rotate(90deg)",
                            md: "rotate(90deg)",
                            sm: "rotate(90deg)",
                            xs: "rotate(180deg)",
                          },
                        }}
                      ></Divider>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: {
                              xl: "24px",
                              lg: "24px",
                              md: "22px",
                              sm: "22px",
                              xs: "20px",
                            },
                            lineHeight: "36px",
                            textTransform: "capitalize",
                            color: "#000000",
                            marginTop: {
                              xl: "35px",
                              lg: "35px",
                              md: "35px",
                              sm: "35px",
                              xs: "0px",
                            },
                          }}
                        >
                          {typeName.name}
                        </Typography>
                      </Box>

                      {categoryWiseData.map((data) => {
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              columnGap: {
                                xl: "20px",
                                lg: "20px",
                                md: "20px",
                                sm: "20px",
                                xs: "10px",
                              },
                              marginTop: {
                                xl: "35px",
                                lg: "35px",
                                md: "35px",
                                sm: "35px",
                                xs: "20px",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: {
                                  xl: "155px",
                                  lg: "160px",
                                  md: "143px",
                                  sm: "173px",
                                  xs: "250px",
                                },
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src={data.image}
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: "Poppins",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: {
                                    xl: "18px",
                                    lg: "18px",
                                    md: "18px",
                                    sm: "16px",
                                    xs: "14px",
                                  },
                                  lineHeight: "25px",
                                  textTransform: "capitalize",
                                  color: "#000000",
                                }}
                              >
                                {data.name}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Poppins",
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: {
                                    xl: "14px",
                                    lg: "14px",
                                    md: "14px",
                                    sm: "12px",
                                    xs: "10px",
                                  },
                                  lineHeight: {
                                    xl: "36px",
                                    lg: "36px",
                                    md: "36px",
                                    sm: "20px",
                                    xs: "20px",
                                  },
                                  textTransform: "capitalize",
                                  color: "#848484",
                                }}
                              >
                                {data.sentance}
                              </Typography>
                              <Typography
                                sx={{
                                  xl: "14px",
                                  lg: "14px",
                                  md: "14px",
                                  sm: "12px",
                                  xs: "10px",
                                }}
                              >
                                ₹{data.price}
                              </Typography>

                              {!data.addToCart || data.itemCount <= 0 ? (
                                <Button
                                  onClick={() => {
                                    addToCartHandler(data);
                                  }}
                                  sx={{
                                    width: {
                                      xl: "125px",
                                      lg: "125px",
                                      md: "125px",
                                      sm: "100px",
                                      xs: "100px",
                                    },
                                    height: {
                                      xl: "35px",
                                      lg: "35px",
                                      md: "35px",
                                      sm: "30px",
                                      xs: "30px",
                                    },
                                    fontSize: {
                                      xl: "14px",
                                      lg: "14px",
                                      md: "14px",
                                      sm: "10px",
                                      xs: "10px",
                                    },
                                    textAlign: "left",
                                    justifyContent: "flex-start",
                                    backgroundColor: "#FFC300",
                                    marginTop: "10px",
                                    color: "#ffffff",
                                    "&:hover": {
                                      backgroundColor: "#FFC300",
                                      color: "#ffffff",
                                    },
                                  }}
                                >
                                  add to cart
                                </Button>
                              ) : (
                                <Box
                                  sx={{
                                    display: "flex",
                                    paddingTop: "10px",
                                  }}
                                >
                                  <Button
                                    onClick={() => {
                                      decrementItemCount(data);
                                    }}
                                    sx={{
                                      width: "30px",
                                      height: "35px",
                                      backgroundColor: "#F3F3F3",
                                      color: "#999999",
                                      fontSize: "20px",
                                    }}
                                  >
                                    -
                                  </Button>
                                  <Typography
                                    sx={{
                                      width: "48px",
                                      height: "35px",
                                      fontSize: "20px",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data.itemCount}
                                  </Typography>
                                  <Button
                                    onClick={() => {
                                      incrementItemCount(data);
                                    }}
                                    sx={{
                                      width: "48px",
                                      height: "35px",
                                      backgroundColor: "#F3F3F3",
                                      color: "#999999",
                                      fontSize: "20px",
                                    }}
                                  >
                                    +
                                  </Button>
                                </Box>
                              )}
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  </>
                );
              }
            })}
          </Box>
        </Box>
      </MaxWidthWrapper>
    </>
  );
};

export default DetailView;
