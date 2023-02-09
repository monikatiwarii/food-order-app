import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { restaurant } from "../../data/data";

const DiningOut = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: {
          xl: "250px",
          lg: "130px",
          md: "20px",
          sm: "18px",
          xs: "10px",
        },
        flexWrap: "wrap",
      }}
    >
      {restaurant.map((data) => {
        return (
          <Box
            sx={{
              width: {
                xl: "343px",
                lg: "343px",
                md: "290px",
                sm: "230px",
                xs: "266px",
              },
              height: {
                xl: "200px",
                lg: "200px",
                md: "200px",
                sm: "180px",
                xs: "160px",
              },
              background: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "343px",
                  lg: "343px",
                  md: "290px",
                  sm: "230px",
                  xs: "266px",
                },
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
        );
      })}
    </Box>
  );
};

export default DiningOut;
