import { Box, Grid, Typography } from "@mui/material";
import { menus } from "../../data/data";

const Menus = () => {
  return (
    <>
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
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          sx={{
            marginTop: {
              xl: "20px",
              lg: "40px",
              md: "30px",
              sm: "20px",
              xs: "10px",
            },
            paddingLeft: {
              xl: "368px",
              lg: "250px",
              md: "125px",
              sm: "30px",
              xs: "30px",
            },
          }}
        >
          {menus.map((menu, index) => {
            return (
              <Grid item xs={6} sm={4} md={4} key={index}>
                <Box>
                  <img
                    src={menu.image}
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
                      md: "20px",
                      sm: "16px",
                      xs: "12px",
                    },
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                  }}
                >
                  {menu.type}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Menus;
