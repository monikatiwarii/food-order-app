import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
import Header from "../header/Header";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { cartItemAction } from "../../store/reducers/cartItemSlice";
import { coupons } from "../../data/data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import AuthComponent from "../common/AuthComponent";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 3,
    position: "relative",
    backgroundColor: "#F3F3F3",
    fontSize: 13,
    fontFamily: "Poppins",
    fontWeight: "400",
    width: {
      xl: "200px",
      lg: "200px",
      md: "200px",
      sm: "150px",
      xs: "100px",
    },
    padding: "10px 20px",
    color: "#848484",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

let isCoupenUsed = false;
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [couponValue, setCouponValue] = useState();
  const [invalidCoupen, setInvalidCoupen] = useState("");
  const [invalidCoupenButton, setInvalidCoupenButton] = useState("");

  // function to count current cart Data
  let countCartAmount = () => {
    let total = 0;
    cartData.map((data) => {
      total += data.price * data.itemCount;
    });
    setTotal(total);
    return total;
  };

  const cartData = useSelector(
    (state) => state.rootReducer.cartItemSlice.getCartData
  );

  useEffect(() => {
    let total = 0;
    let discount = 0;
    if (cartData.length > 0) {
      cartData.map((data) => {
        total += data.price * data.itemCount;
      });
      setTotal(total);
      if (!!couponValue) {
        coupons.map((data) => {
          if (data.name === couponValue) {
            isCoupenUsed = true;
            if (data.type === "PERCENTAGE") {
              discount = total * (data.value / 100);
              total = total - discount;
              if (total < 0) total = 0;
            } else {
              discount = data.value;
              total = total - discount;
              if (total < 0) total = 0;
            }
          }
        });
      }
      setDiscount(discount);
      setGrandTotal(total);
    }
  }, [cartData]);

  //increment item count
  const incrementItemCount = (data) => {
    if (data.itemCount < 5) {
      cartData.map((typedata) => {
        if (typedata.id === data.id) {
          typedata = { ...typedata, itemCount: data.itemCount + 1 };
          dispatch(cartItemAction.setCartData(typedata));
        }
        return typedata;
      });
    }
  };

  // decrement item count
  const decrementItemCount = (data) => {
    if (data.itemCount > 0) {
      cartData.map((typedata) => {
        if (typedata.id === data.id) {
          if (typedata.itemCount < 2) {
            dispatch(cartItemAction.removeCartItem(typedata));
            setGrandTotal(0);
          } else {
            typedata = {
              ...typedata,
              addToCart: false,
              itemCount: data.itemCount - 1,
            };
            dispatch(cartItemAction.setCartData(typedata));
          }
        }
        return typedata;
      });
    }
  };

  //to get applied coupon text
  const handleChangeCoupon = (e) => {
    isCoupenUsed = false;
    setInvalidCoupenButton("");
    setDiscount(0);
    setGrandTotal(countCartAmount());
    setCouponValue(e.target.value);
  };

  //to check coupon is valid or not and coupon type
  const applyCoupon = () => {
    setInvalidCoupen("");
    if (!isCoupenUsed) {
      let couponData = coupons.find((coupon) => coupon.name === couponValue);
      if (!couponData) {
        setInvalidCoupen("Invalid coupon!");
      } else {
        setInvalidCoupen("");
        isCoupenUsed = true;
        let gTotal = 0;
        let discount = 0;
        if (couponData.type === "PERCENTAGE") {
          discount = grandTotal * (couponData.value / 100);
          gTotal = grandTotal - discount;
          if (gTotal < 0) setGrandTotal(0);
          else setGrandTotal(gTotal);
        } else {
          discount = couponData.value;
          gTotal = grandTotal - discount;
          if (gTotal < 0) setGrandTotal(0);
          else setGrandTotal(gTotal);
        }
        setDiscount(discount);

        // remove coupon button
        let removeCouponButton = (
          <Button
            onClick={removeCoupon}
            sx={{
              width: "50px",
              height: "40px",
              fontSize: "18px",
              marginLeft: "20px",
              marginTop: "20px",
              backgroundColor: "#FFC300",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#FC0303",
                color: "#ffffff",
              },
            }}
          >
            X
          </Button>
        );
        setInvalidCoupenButton(removeCouponButton);
      }
    }
  };

  // remove coupon
  const removeCoupon = () => {
    isCoupenUsed = false;
    setGrandTotal(countCartAmount());
    setDiscount(0);
    setCouponValue("");
    setInvalidCoupen("");
    setInvalidCoupenButton("");
  };

  // order placed
  const orderHandler = () => {
    if (grandTotal !== 0) {
      localStorage.setItem("isOrdered", true);
      navigate("/order");
      dispatch(cartItemAction.clearCartData());
      setGrandTotal(0);
    }
  };

  return (
    <AuthComponent>
      <MaxWidthWrapper>
        <Header />
        <Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: {
                  xl: "32px",
                  lg: "28px",
                  md: "32px",
                  sm: "24px",
                  xs: "20px",
                },
                lineHeight: "36px",
                textTransform: "capitalize",
                color: "#000000",
                marginTop: "80px",
              }}
            >
              Your Cart
            </Typography>
          </Box>
        </Box>
        {cartData.length !== 0 ? (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: {
                  xl: "465px",
                  lg: "465px",
                  md: "465px",
                  sm: "300px",
                  xs: "220px",
                },
                border: "1px solid #848484",
                padding: {
                  xl: "50px",
                  lg: "50px",
                  md: "50px",
                  sm: "50px",
                  xs: "30px",
                },
                marginTop: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "200px",
                  },
                  justifyContent: "space-between",
                  marginTop: "40px",
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
                      md: "22px",
                      sm: "22px",
                      xs: "20px",
                    },
                    lineHeight: "21px",
                    color: "#848484",
                    textTransform: "capitalize",
                  }}
                >
                  total
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "21px",
                    color: "#FFA500",
                  }}
                >
                  ₹{total}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "200px",
                  },
                  justifyContent: "space-between",
                  marginTop: "40px",
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
                      md: "22px",
                      sm: "22px",
                      xs: "20px",
                    },
                    lineHeight: "21px",
                    color: "#848484",
                    textTransform: "capitalize",
                  }}
                >
                  Discount
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "21px",
                    color: "#FFA500",
                  }}
                >
                  ₹{discount}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "200px",
                  },
                  justifyContent: "space-between",
                  marginTop: "40px",
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
                      md: "22px",
                      sm: "22px",
                      xs: "20px",
                    },
                    lineHeight: "21px",
                    color: "#848484",
                    textTransform: "capitalize",
                  }}
                >
                  Amount to Pay
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "21px",
                    color: "#FFA500",
                  }}
                >
                  ₹{grandTotal}
                </Typography>
              </Box>
              {/* new total/discount End : change End */}

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    marginTop: "20px",
                    width: {
                      xl: "200px",
                      lg: "200px",
                      md: "200px",
                      sm: "150px",
                      xs: "150px",
                    },
                  }}
                >
                  <BootstrapInput
                    placeholder="Apply Coupon Code"
                    id="bootstrap-input"
                    onChange={(e) => handleChangeCoupon(e)}
                    value={couponValue}
                  />
                </Box>

                <Button
                  id="applyCoupon"
                  onClick={applyCoupon}
                  sx={{
                    width: {
                      xl: "200px",
                      lg: "200px",
                      md: "200px",
                      sm: "100px",
                      xs: "100px",
                    },
                    height: "40px",
                    fontSize: {
                      xl: "18px",
                      lg: "18px",
                      md: "18px",
                      sm: "16px",
                      xs: "14px",
                    },
                    marginLeft: {
                      xl: "20px",
                      lg: "20px",
                      md: "20px",
                      sm: "5px",
                      xs: "10px",
                    },
                    marginTop: "20px",
                    backgroundColor: "#FFC300",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#FFC300",
                      color: "#ffffff",
                    },
                  }}
                >
                  Apply
                </Button>

                {invalidCoupenButton}
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "21px",
                    color: "#FC0303",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                >
                  {invalidCoupen}
                </Typography>
              </Box>
              <Button
                onClick={orderHandler}
                sx={{
                  width: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "230px",
                    xs: "200px",
                  },
                  height: "43px",
                  textAlign: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "#FFC300",
                  marginTop: "40px",
                  marginLeft: {
                    xl: "60px",
                    lg: "60px",
                    md: "60px",
                    sm: "40px",
                    xs: "5px",
                  },
                  fontFamily: "Poppins",
                  fontSize: {
                    xl: "20px",
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "14px",
                  },
                  color: "#ffffff",
                  textTransform: "capitalize",
                  paddingLeft: {
                    xl: "100px",
                    lg: "100px",
                    md: "100px",
                    sm: "80px",
                    xs: "60px",
                  },
                  "&:hover": {
                    backgroundColor: "#FFC300",
                    color: "#ffffff",
                  },
                }}
              >
                order now
              </Button>
            </Box>
            <Box
              sx={{
                marginTop: "50px",
                display: "flex",
                columnGap: {
                  xl: "50px",
                  lg: "80px",
                  md: "80px",
                  sm: "50px",
                  xs: "50px",
                },
                rowGap: "30px",
                alignItems: { xs: "center" },
                flexWrap: "wrap",
              }}
            >
              {cartData.map((data, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: "#F9F9F9",
                      width: {
                        xl: "350px",
                        lg: "300px",
                        md: "300px",
                        sm: "280px",
                        xs: "250px",
                      },
                      marginTop: "40px",
                      padding: "28px",
                    }}
                  >
                    <Box
                      sx={{
                        xl: "300px",
                        lg: "300px",
                        md: "300px",
                        sm: "280px",
                        xs: "200px",
                      }}
                    >
                      <img
                        style={{ width: "100%", height: "186px" }}
                        src={data.image}
                        alt=""
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: {
                            xl: "20px",
                            lg: "20px",
                            md: "18px",
                            sm: "16px",
                            xs: "16px",
                          },
                          lineHeight: "30px",
                          color: "#000000",
                          marginTop: "10px",
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
                            xl: "20px",
                            lg: "20px",
                            md: "18px",
                            sm: "16px",
                            xs: "16px",
                          },
                          marginTop: "10px",
                          lineHeight: "30px",
                          color: "#FFA500",
                        }}
                      >
                        ₹{data.price}
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
                          md: "12px",
                          sm: "12px",
                          xs: "10px",
                        },
                        lineHeight: "21px",
                        color: "#848484",
                        paddingTop: "10px",
                      }}
                    >
                      {data.sentance}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        paddingTop: {
                          xl: "40px",
                          lg: "40px",
                          md: "40px",
                          sm: "40px",
                          xs: "20px",
                        },
                      }}
                    >
                      <Button
                        onClick={() => {
                          decrementItemCount(data);
                        }}
                        sx={{
                          width: {
                            xl: "48px",
                            lg: "48px",
                            md: "48px",
                            sm: "48px",
                            xs: "40px",
                          },
                          height: {
                            xl: "43px",
                            lg: "43px",
                            md: "43px",
                            sm: "43px",
                            xs: "38px",
                          },
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
                          height: "43px",
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
                          width: {
                            xl: "48px",
                            lg: "48px",
                            md: "48px",
                            sm: "48px",
                            xs: "40px",
                          },
                          height: {
                            xl: "43px",
                            lg: "43px",
                            md: "43px",
                            sm: "43px",
                            xs: "38px",
                          },
                          backgroundColor: "#F3F3F3",
                          color: "#999999",
                          fontSize: "20px",
                        }}
                      >
                        +
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "35px",
                        paddingTop: "40px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "21px",
                          color: "#848484",
                          textTransform: "capitalize",
                        }}
                      >
                        subtotal
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: {
                            xl: "20px",
                            lg: "20px",
                            md: "20px",
                            sm: "18px",
                            xs: "16px",
                          },
                          lineHeight: "21px",
                          color: "#FFA500",
                        }}
                      >
                        ₹{data.price} * {data.itemCount}
                      </Typography>
                    </Box>
                    <Divider
                      sx={{
                        width: {
                          xl: "350px",
                          lg: "350px",
                          md: "350px",
                          sm: "280px",
                          xs: "250px",
                        },
                        marginTop: "10px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "35px",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "21px",
                          color: "#848484",
                          textTransform: "capitalize",
                        }}
                      >
                        total
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: {
                            xl: "20px",
                            lg: "20px",
                            md: "20px",
                            sm: "18px",
                            xs: "16px",
                          },
                          lineHeight: "21px",
                          color: "#FFA500",
                        }}
                      >
                        ₹{data.price * data.itemCount}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Box
              sx={{
                width: "500px",
              }}
            >
              <img style={{ width: "100%" }} src="images/empty-cart.png" />
            </Box>
          </Box>
        )}
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Cart;
