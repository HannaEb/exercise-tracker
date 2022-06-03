import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Reset = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: "RESET_EXERCISES",
    });
    dispatch({
      type: "RESET_GOAL",
    });
  };

  return (
    <Box textAlign="center" mt={5}>
      <Button variant="outlined" onClick={() => handleClick()}>
        Reset All
      </Button>
    </Box>
  );
};

export default Reset;
