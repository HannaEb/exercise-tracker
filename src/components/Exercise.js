import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";

const Exercise = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExercise = () => {
    dispatch({
      type: "DELETE_EXERCISE",
      payload: props.id,
    });
  };

  return (
    <TableRow>
      <TableCell>{props.day}</TableCell>
      <TableCell>{props.type}</TableCell>
      <TableCell>{props.duration}</TableCell>
      <TableCell>
        <IconButton edge="end" onClick={handleDeleteExercise}>
          <DeleteForeverIcon></DeleteForeverIcon>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Exercise;
