import { Box, Divider, Typography } from "@mui/material";

const Cuisines = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            paddingTop: "80px",
            marginBottom: 0,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {
              xl: "42px",
              lg: "42px",
              md: "42px",
              sm: "38px",
              xs: "20px",
            },
            lineHeight: {
              xl: "72px",
              lg: "72px",
              md: "72px",
              sm: "72px",
              xs: "30px",
            },
            color: "#FFC200",
          }}
        >
          Our best delivered cuisines
        </Typography>
        <Typography
          sx={{
            marginTop: 0,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: {
              xl: "14px",
              lg: "14px",
              md: "14px",
              sm: "12px",
              xs: "10px",
            },
            lineHeight: "24px",
            textTransform: "lowercase",
            color: "#000000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          paddingTop: "100px",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              width: {
                xl: "272px",
                lg: "246px",
                md: "200px",
                sm: "170px",
                xs: "120px",
              },
            }}
          >
            <img src="images/Ellipse 1.png" style={{ width: "100%" }} alt="" />
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "16px",
                xs: "10px",
              },
              textAlign: "center",
              lineHeight: "30px",
              textTransform: "capitalize",
              color: "#000000",
            }}
          >
            chicken noodles
          </Typography>
        </Box>
        <Divider
          sx={{
            width: {
              xl: "213px",
              lg: "213px",
              md: "115px",
              sm: "90px",
              xs: "90px",
            },
            height: "0px",
            marginTop: {
              xl: "116px",
              lg: "116px",
              md: "116px",
              sm: "116px",
              xs: "60px",
            },
            marginLeft: {
              xl: "70px",
              lg: "25px",
              md: "20px",
              sm: "10px",
              xs: "10px",
            },
            marginRight: {
              xl: "70px",
              lg: "25px",
              md: "20px",
              sm: "10px",
              xs: "10px",
            },
            border: "2px solid #FFC200",
          }}
        />
        <Box>
          <Box
            sx={{
              width: {
                xl: "272px",
                lg: "246px",
                md: "200px",
                sm: "170px",
                xs: "120px",
              },
            }}
          >
            <img src="images/Ellipse 2.png" style={{ width: "100%" }} alt="" />
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "16px",
                xs: "10px",
              },
              textAlign: "center",
              lineHeight: "30px",
              textTransform: "capitalize",
              color: "#000000",
            }}
          >
            french fries
          </Typography>
        </Box>
        <Divider
          sx={{
            width: {
              xl: "213px",
              lg: "213px",
              md: "115px",
              sm: "90px",
              xs: "90px",
            },
            height: "0px",
            marginTop: {
              xl: "116px",
              lg: "116px",
              md: "116px",
              sm: "116px",
              xs: "60px",
            },
            marginLeft: {
              xl: "70px",
              lg: "35px",
              md: "20px",
              sm: "10px",
              xs: "10px",
            },
            marginRight: {
              xl: "70px",
              lg: "35px",
              md: "20px",
              sm: "10px",
              xs: "10px",
            },
            border: "2px solid #FFC200",
          }}
        />
        <Box>
          <Box
            sx={{
              width: {
                xl: "272px",
                lg: "246px",
                md: "200px",
                sm: "170px",
                xs: "120px",
              },
            }}
          >
            <img src="images/Ellipse 3.png" style={{ width: "100%" }} alt="" />
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "16px",
                xs: "10px",
              },
              textAlign: "center",
              lineHeight: "30px",
              textTransform: "capitalize",
              color: "#000000",
            }}
          >
            avacado mint noodles
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cuisines;
