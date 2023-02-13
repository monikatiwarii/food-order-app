import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const FoodDeliveryImage = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: {
            xl: "150px",
            lg: "120px",
            md: "100px",
            sm: "100px",
            xs: "80px",
          },

          backgroundImage: `url("images/Rectangle12.png")`,
          backgroundSize: "cover",
          width: "100%",
          height: {
            xl: "543px",
            lg: "423px",
            md: "395px",
            sm: "250px",
            xs: "200px",
          },
        }}
      >
        <Typography
          sx={{
            position: "relative",
            width: {
              xl: "595px",
              lg: "595px",
              md: "595px",
              sm: "500px",
              xs: "230px",
            },
            height: "144px",
            left: {
              xl: "200px",
              lg: "165px",
              md: "130px",
              sm: "100px",
              xs: "35px",
            },
            top: {
              xl: "240px",
              lg: "165px",
              md: "110px",
              sm: "95px",
              xs: "65px",
            },
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {
              xl: "48px",
              lg: "48px",
              md: "48px",
              sm: "36px",
              xs: "20px",
            },
            lineHeight: {
              xl: "72px",
              lg: "72px",
              md: "72px",
              sm: "72px",
              xs: "40px",
            },
            textTransform: "capitalize",
            color: "#FFFFFF",
          }}
        >
          fastest food <span style={{ color: "yellow" }}>delivery </span> in the
          town
        </Typography>
      </Box>
    </>
  );
};

export default FoodDeliveryImage;
