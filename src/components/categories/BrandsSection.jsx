import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { brandsData } from "../../data/data";

const BrandsSection = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: {
              xl: "28px",
              lg: "28px",
              md: "28px",
              sm: "24px",
              xs: "20px",
            },
            lineHeight: "48px",
            color: "#000000",
          }}
        >
          Top brands for you
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {brandsData.map((data, index) => {
            return (
              <Box>
                <Link to="/detailView" state={{ categoryData: data }}>
                  <Box
                    sx={{
                      width: {
                        xs: "100px",
                        md: "185px",
                        sm: "150px",
                      },
                      height: {
                        xs: "100px",
                        md: "185px",
                        sm: "150px",
                      },
                      position: "relative",
                      marginRight: "20px",
                      marginTop: "50px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        position: "absolute",
                      }}
                      src={data.image}
                      alt=""
                    />
                  </Box>
                </Link>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: { md: "20px", xs: "14px" },
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    color: "#000000",
                    textAlign: "center",
                    paddingTop: "15px",
                  }}
                >
                  {data.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default BrandsSection;
