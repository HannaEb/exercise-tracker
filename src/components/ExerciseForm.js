import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ExerciseForm = () => {
  const [day, setDay] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    const exercise = {
      id: uuidv4(),
      day: day,
      type: type,
      duration: parseInt(duration),
    };

    dispatch({
      type: "ADD_EXERCISE",
      payload: exercise,
    });

    setDay("");
    setType("");
    setDuration("");
  };

  return (
    <Box component="form" mb={5}>
      <Typography variant="h5" component="h2" mt={5} mb={3}>
        Add Exercise
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& .MuiTextField-root": { mr: 2, mb: 2, minWidth: "25ch" },
        }}
      >
        <TextField
          required
          label="Enter day of the week"
          variant="filled"
          size="small"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
        <TextField
          required
          label="Enter type of exercise"
          variant="filled"
          size="small"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
        <TextField
          required
          label="Enter duration of exercise"
          variant="filled"
          size="small"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </Box>
      <Button variant="outlined" onClick={() => handleClick()}>
        Add
      </Button>
    </Box>
  );
};

export default ExerciseForm;
