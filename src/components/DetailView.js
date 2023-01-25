import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import Button from "@mui/material/Button";

const menus = [
  {
    image: "images/Rectangle 33.png",
    type: "dinning menu",
  },
  {
    image: "images/Rectangle 34.png",
    type: "takeaway menu",
  },
];

const foodButtons = [
  { type: "Recommended" },
  { type: "Pizzas(50)" },
  { type: "Classic Pizzas For Classic Maniacs (10)" },
  { type: "Garlic Breads (7)" },
  { type: "Lasagna (3)" },
  { type: "Desserts (2)" },
];

const DetailView = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menus);
  }, []);

  const [foodButton, setFoodButtons] = useState([]);

  useEffect(() => {
    setFoodButtons(foodButtons);
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          gap: "100px",
          paddingTop:'20px'
        }}>
        <Box>
          <img style={{
            width:'110%',
            height:'90%'
          }} src="images/Rectangle141.png" alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <img style={{
            width:'104%',
            height:'44%'
          }} src="images/Rectangle151.png" alt="" />
          <img style={{
            width:'104%',
            height:'44%'
          }} src="images/Rectangle161.png" alt="" />
        </Box>
      </Box>
    <Box sx={{
        display:'flex',
        paddingLeft:'368px',
        paddingTop :'25px' 
    }}>
        <Box><img src="images/Ellipse11.png" alt=""/></Box>
        <Box sx={{paddingLeft:'30px'}}>
            <Typography sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "36px",
                textTransform: "capitalize",
                color: "#000000",
                paddingTop:'20px'
             }}>
                La Pino'z Pizza
            </Typography>
            <Box sx={{display:'flex',columnGap:'20px'}}>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textTransform: "capitalize",
                    color: "#999999",
                    paddingTop:'2px'
                }}>
                    Pizza, Fast Food, Beverages
                </Typography>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textTransform: "capitalize",
                    color: "#999999",
                }} >
                    Average Cost: 700rs per 2 person
                </Typography>
            </Box>
            <Typography sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "36px",
                textTransform: "capitalize",
                color: "#999999",
            }}>
                Vesu,Surat
            </Typography>
            <Typography sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "36px",
                textTransform: "capitalize",
                color: "#999999",
            }}>
                <span style={{color:'#C84B11'}}>Open now </span>11am – 11pm (Today)
            </Typography>
            <Box>
                <Button sx={{
                    width: "140px",
                    height: "35px",
                    textAlign: "center",
                    justifyContent: "flex-start",
                    backgroundColor: "#FFC300",
                    marginTop: "10px",
                    color: "#ffffff",
                    marginRight:'20px',
                    "&:hover": {
                        backgroundColor: "#FFC300",
                        color: "#ffffff",
                    },
                }}>order online</Button>
                <Button variant="outlined" sx={{
                    width: "140px",
                    height: "35px",
                    textAlign: "center",
                    justifyContent: "flex-start",
                    borderColor: "#FFC300",
                    marginTop: "10px",
                    color: "black",
                    marginRight:'20px',
                    "&:hover": {
                        borderColor: "#FFC300",
                        background:'white'
                    }
                }}>directions</Button>
                <Button variant="outlined" sx={{
                    width: "140px",
                    height: "35px",
                    textAlign: "center",
                    justifyContent: "flex-start",
                    borderColor: "#FFC300",
                    marginTop: "10px",
                    color: "black",
                    marginRight:'20px',
                    
                    "&:hover": {
                        borderColor: "#FFC300",
                        background:'white'   
                    }
                }}>share</Button>
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
            paddingLeft: "368px",
            paddingTop: "100px",
          }}
        >
          Menu
        </Typography>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "368px",
            paddingTop: "50px",
            columnGap: "30px",
          }}
        >
          {menu.map((menu) => {
            return (
              <Box>
                <img src={menu.image} alt="" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
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
            paddingLeft: "368px",
            paddingTop: "100px",
          }}
        >
          Order Online
        </Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "368px",
              rowGap: "10px",
              paddingTop: "50px",
            }}
          >
            {foodButton.map((foods) => {
              return (
                <Button
                  sx={{
                    width: "245px",
                    height: "50px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    "&:hover": {
                      backgroundColor: "#FFC300",
                    },
                  }}
                  variant=""
                >
                  {foods.type}
                </Button>
              );
            })}
          </Box>
          <Box sx={{ width: "60px" }}>
            <Divider
              sx={{
                width: "375px",
                marginTop: "220px",
                marginLeft: "-183px",
                marginRight: "70px",
                border: "1px solid #FFC200",
                marginBottom: "100px",
                transform: "rotate(90deg)",
              }}
            ></Divider>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "36px",
                    textTransform: "capitalize",
                    color: "#000000",
                    marginTop:'35px'
                }}>
                    Recommended
                </Typography>{" "}
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    columnGap: "20px",
                    marginTop: "35px",
                    }}
                >
                    <Box>
                    <img
                        style={{ width: "155px" }}
                        src="images/Rectangle 77.png"
                        alt=""
                    />
                    </Box>
                    <Box>
                    <Typography
                        sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "25px",
                        textTransform: "capitalize",
                        color: "#000000",
                        }}
                    >
                        Margherita Pizza
                    </Typography>
                    <Typography
                        sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "36px",
                        textTransform: "capitalize",
                        color: "#848484",
                        }}
                    >
                        A Classic Cheesy Margharita. Can't Go Wrong.
                    </Typography>
                    <Typography>₹140</Typography>
                    <Button
                        sx={{
                        width: "125px",
                        height: "35px",
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
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetailView;
