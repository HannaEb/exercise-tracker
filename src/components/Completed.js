import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Completed = () => {
  const { exercises } = useContext(AppContext);

  const totalExerciseTime = exercises.reduce((total, session) => {
    return (total += session.duration);
  }, 0);

  return (
    <Grid item xs={12} sm={4}>
      <Paper elevation={3} align="center" sx={{ backgroundColor: "#eee" }}>
        <Typography component="p" py={3}>
          Completed: {totalExerciseTime} min
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Completed;
