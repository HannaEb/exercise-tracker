import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Reset = () => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: "RESET_EXERCISES",
    });
    dispatch({
      type: "RESET_GOAL",
    });
  };

  return (
    <button type="button" onClick={() => handleClick()}>
      Reset
    </button>
  );
};

export default Reset;
