import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Goal = () => {
  const { goal } = useContext(AppContext);
  return (
    <div>
      <span>Weekly Goal: {goal} minutes</span>
    </div>
  );
};

export default Goal;
