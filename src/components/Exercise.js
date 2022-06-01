import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DeleteIcon from "@mui/icons-material/Delete";

const Exercise = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExercise = () => {
    dispatch({
      type: "DELETE_EXERCISE",
      payload: props.id,
    });
  };

  return (
    <li>
      {props.type}
      {props.duration}
      <DeleteIcon onClick={handleDeleteExercise}></DeleteIcon>
    </li>
  );
};

export default Exercise;
