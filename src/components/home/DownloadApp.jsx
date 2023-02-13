import { Box } from "@mui/material";

const DownloadApp = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xl: "1296px",
            lg: "1180px",
            md: "740px",
            sm: "540px",
            xs: "300px",
          },
          margin: "auto",
        }}
      >
        <img src="images/Frame3.png" style={{ width: "100%" }} alt="" />
      </Box>
    </>
  );
};

export default DownloadApp;
