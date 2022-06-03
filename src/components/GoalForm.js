import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const GoalForm = () => {
  const [goal, setGoal] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: "SET_GOAL",
      payload: goal,
    });

    setGoal("");
  };
  return (
    <Box
      component="form"
      mb={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <TextField
        required
        label="Enter goal in minutes"
        variant="filled"
        size="small"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />
      <Button
        variant="outlined"
        sx={{
          marginTop: 2,
        }}
        onClick={() => handleClick()}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default GoalForm;
