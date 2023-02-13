import { Box, Grid, Typography } from "@mui/material";

const FoodOffers = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: {
            xl: "150px",
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
          position: "relative",
        }}
      >
        <Grid item sm={6} xs={6}>
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
              }}
            >
              <img
                src="images/Rectangle14.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
            <Typography
              sx={{
                width: {
                  xl: "500px",
                  lg: "350px",
                  md: "350px",
                  sm: "350px",
                  xs: "130px",
                },
                position: "absolute",
                top: {
                  xl: "238px",
                  lg: "165px",
                  md: "118px",
                  sm: "118px",
                  xs: "47px",
                },
                left: {
                  xl: "50px",
                  lg: "50px",
                  md: "50px",
                  sm: "50px",
                  xs: "12px",
                },
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: {
                  xl: "90px",
                  lg: "64px",
                  md: "50px",
                  sm: "50px",
                  xs: "20px",
                },
                lineHeight: {
                  xl: "136px",
                  lg: "96px",
                  md: "75px",
                  sm: "75px",
                  xs: "30px",
                },
                textTransform: "capitalize",
                color: "#FFFFFF",
              }}
            >
              Buy 2 Get 1 Free
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
              <img
                src="images/Rectangle15.png"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt=""
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <img
                src="images/Rectangle16.png"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FoodOffers;
