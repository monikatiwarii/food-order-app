import { Box, Grid, Typography } from "@mui/material";

const DetailViewHeader = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: {
            xl: "10px",
            lg: "5px",
            md: "5px",
            sm: "5px",
            xs: "3px",
          },
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
                src="images/Rectangle141.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
              <img
                src="images/Rectangle151.png"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt=""
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <img
                src="images/Rectangle161.png"
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

export default DetailViewHeader;
