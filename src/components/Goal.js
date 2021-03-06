import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Goal = () => {
  const { goal, exercises } = useContext(AppContext);

  const totalExerciseTime = exercises.reduce((total, session) => {
    return (total = total + session.duration);
  }, 0);

  const background = goal <= totalExerciseTime ? "#80cbc4" : "#ef9a9a";

  return (
    <Grid item xs={12} sm={4}>
      <Paper
        elevation={3}
        align="center"
        sx={{ backgroundColor: `${background}` }}
      >
        <Typography component="p" py={3}>
          Goal: {goal} min
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Goal;
