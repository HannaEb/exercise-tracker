import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const GoalForm = () => {
  const [goal, setGoal] = useState("");
  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "SET_GOAL",
      payload: goal,
    });

    setGoal("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label>How many minutes would you like to exercise this week?</label>
      <input
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      ></input>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default GoalForm;
