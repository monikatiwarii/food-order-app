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
            xs: "100px",
          },
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: {
              xl: "543px",
              lg: "495px",
              md: "395px",
              sm: "325px",
              xs: "200px",
            },
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="images/Rectangle12.png"
            alt=""
          />
        </Box>
        <Typography
          sx={{
            position: "relative",
            width: {
              xl: "595px",
              lg: "595px",
              md: "595px",
              sm: "595px",
              xs: "250px",
            },
            height: "144px",
            left: {
              xl: "234px",
              lg: "234px",
              md: "192px",
              sm: "120px",
              xs: "50px",
            },
            top: {
              xl: "-282px",
              lg: "-306px",
              md: "-256px",
              sm: "-235px",
              xs: "-111px",
            },
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {
              xl: "48px",
              lg: "48px",
              md: "48px",
              sm: "42px",
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
