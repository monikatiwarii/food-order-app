import { Box, Typography } from "@mui/material";

const FoodOffers = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-80px",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "635px",
              lg: "545px",
              md: "445px",
              sm: "330px",
              xs: "140px",
            },
          }}
        >
          <img
            src="images/Rectangle14.png"
            style={{
              width: "100%",
            }}
            alt=""
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: {
              xl: "15px",
              lg: "15px",
              md: "15px",
              sm: "15px",
              xs: "5px",
            },
            gap: { xl: "15px", lg: "15px", md: "15px", sm: "15px", xs: "0px" },
          }}
        >
          <Box
            sx={{
              width: {
                xl: "635px",
                lg: "545px",
                md: "445px",
                sm: "330px",
                xs: "135px",
              },
            }}
          >
            <img
              src="images/Rectangle15.png"
              style={{
                width: "100%",
              }}
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: {
                xl: "635px",
                lg: "545px",
                md: "445px",
                sm: "330px",
                xs: "135px",
              },
            }}
          >
            <img
              src="images/Rectangle16.png"
              style={{
                width: "100%",
              }}
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          top: {
            xl: "-420px",
            lg: "-355px",
            md: "-302px",
            sm: "-236px",
            // xs:'',
          },
          left: {
            xl: "200px",
            lg: "145px",
            md: "45px",
            sm: "45px",
            // xs:'',
          },
          width: { xl: "390px", lg: "390px", md: "390px", sm: "265px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: { xl: "64px", lg: "64px", md: "64px", sm: "48px" },
            lineHeight: { xl: "110px", lg: "96px", md: "96px", sm: "65px" },
            textTransform: "capitalize",
            color: "#ffffff",
          }}
        >
          Buy 2 Get 1 Free
        </Typography>
      </Box>
    </>
  );
};

export default FoodOffers;
