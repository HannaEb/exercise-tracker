import "./App.css";
import Goal from "./components/Goal";
import Accomplished from "./components/Accomplished";
import Outstanding from "./components/Outstanding";
import ExerciseList from "./components/ExerciseList";
import ExerciseForm from "./components/ExerciseForm";
import GoalForm from "./components/GoalForm";
import Reset from "./components/Reset";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <h1>Weekly Exercise Tracker</h1>
      <GoalForm />
      <Goal />
      <Accomplished />
      <Outstanding />
      <ExerciseList />
      <ExerciseForm />
      <Reset />
    </AppProvider>
  );
};

export default App;
