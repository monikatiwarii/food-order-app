import { Box } from "@mui/system";
import React from "react";

const orderSuccessfull = () => {
  return (
    <Box
      sx={{
        width: { xl: "50%", lg: "50%", md: "40%", sm: "40%", xs: "100%" },
        margin: "auto",
        height: { xl: "50%", lg: "50%", md: "40%", sm: "40%", xs: "100%" },
      }}
    >
      <img
        src="images/successfully-done.gif"
        alt=""
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default orderSuccessfull;
