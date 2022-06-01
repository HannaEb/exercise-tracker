import React, { useContext } from "react";
import Exercise from "./Exercise";
import { AppContext } from "../context/AppContext";

const ExerciseList = () => {
  const { exercises } = useContext(AppContext);

  return (
    <ul>
      {exercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          id={exercise.id}
          type={exercise.type}
          duration={exercise.duration}
        />
      ))}
    </ul>
  );
};

export default ExerciseList;
