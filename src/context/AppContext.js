import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };
    case "RESET_EXERCISES":
      return {
        ...state,
        exercises: [],
      };
    case "SET_GOAL":
      return {
        ...state,
        goal: action.payload,
      };
    case "RESET_GOAL":
      return {
        ...state,
        goal: 0,
      };
    default:
      return state;
  }
};

const initialState = {
  goal: 0,
  exercises: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        goal: state.goal,
        exercises: state.exercises,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
