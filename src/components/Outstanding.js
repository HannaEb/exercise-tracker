import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Outstanding = () => {
  const { exercises, goal } = useContext(AppContext);

  const totalExerciseTime = exercises.reduce((total, session) => {
    return (total = total + session.duration);
  }, 0);

  return (
    <div>
      <span>Still outstanding: {goal - totalExerciseTime} minutes</span>
    </div>
  );
};

export default Outstanding;
