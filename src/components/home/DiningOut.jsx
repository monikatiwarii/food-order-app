import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { restaurant } from "../../data/data";

const DiningOut = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 5, md: 5 }}
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
      {restaurant.map((data, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                marginTop: "20px",
                paddingBottom: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Link to="/categories">
                  <img src={data.image} style={{ width: "100%" }} alt="" />
                </Link>
              </Box>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  textTransform: "capitalize",
                  color: "#000000",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "21px",
                  textTransform: "capitalize",
                  color: "#000000",
                }}
              >
                {data.details}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DiningOut;
