import React, { useContext } from "react";
import Exercise from "./Exercise";
import { AppContext } from "../context/AppContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ExerciseList = () => {
  const { exercises } = useContext(AppContext);

  return (
    <Box>
      <Typography variant="h5" component="h2" mt={5} mb={3}>
        Completed Exercises
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((exercise) => (
              <Exercise
                key={exercise.id}
                id={exercise.id}
                day={exercise.day}
                type={exercise.type}
                duration={exercise.duration}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExerciseList;
