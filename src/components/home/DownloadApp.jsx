import { Box } from "@mui/material";

const DownloadApp = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          left: { xl: "135px", lg: "75px", md: "50px", sm: "50px", xs: "0px" },
          top: {
            xl: "-887px",
            lg: "-700px",
            md: "-500px",
            sm: "-385px",
            xs: "-425px",
          },
          width: {
            xl: "1296px",
            lg: "1180px",
            md: "845px",
            sm: "700px",
            xs: "100%",
          },
        }}
      >
        <img src="images/Frame3.png" style={{ width: "100%" }} alt="" />
      </Box>
    </>
  );
};

export default DownloadApp;
