import Box from "@mui/material/Box";

const MaxWidthWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1536px",
        width: {
          xs: "95%",
          sm: "95%",
          md: "90%",
          lg: "90%",
          xl: "100%",
        },
        margin: "auto",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};
export default MaxWidthWrapper;
