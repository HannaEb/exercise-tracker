import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Remaining = () => {
  const { exercises, goal } = useContext(AppContext);

  const totalExerciseTime = exercises.reduce((total, session) => {
    return (total = total + session.duration);
  }, 0);

  return (
    <Grid item xs={12} sm={4}>
      <Paper elevation={3} align="center" sx={{ backgroundColor: "#eee" }}>
        <Typography component="p" py={3}>
          Remaining: {goal - totalExerciseTime} min
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Remaining;
