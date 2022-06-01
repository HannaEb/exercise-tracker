import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Accomplished = () => {
  const { exercises } = useContext(AppContext);
  console.log("Exercises", exercises);

  const totalExerciseTime = exercises.reduce((total, session) => {
    console.log("Total", total);
    console.log("Session", session);
    return (total += session.duration);
  }, 0);

  return (
    <div>
      <span>Accomplished so far: {totalExerciseTime} minutes</span>
    </div>
  );
};

export default Accomplished;
