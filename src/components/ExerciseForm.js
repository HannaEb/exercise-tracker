import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const ExerciseForm = () => {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const exercise = {
      id: uuidv4(),
      type: type,
      duration: parseInt(duration),
    };

    dispatch({
      type: "ADD_EXERCISE",
      payload: exercise,
    });

    setType("");
    setDuration("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Type</label>
      <input
        value={type}
        onChange={(event) => setType(event.target.value)}
      ></input>
      <label>Duration</label>
      <input
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExerciseForm;
