import "./App.css";
import Goal from "./components/Goal";
import Completed from "./components/Completed";
import Remaining from "./components/Remaining";
import ExerciseList from "./components/ExerciseList";
import ExerciseForm from "./components/ExerciseForm";
import GoalForm from "./components/GoalForm";
import Reset from "./components/Reset";
import { AppProvider } from "./context/AppContext";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material";
import Divider from "@mui/material/Divider";
import theme from "./theme";

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h1" mt={8} mb={6}>
            Weekly Exercise Tracker
          </Typography>
          <GoalForm />
          <Grid container spacing={2} mb={5}>
            <Goal />
            <Completed />
            <Remaining />
          </Grid>
          <ExerciseList />
          <ExerciseForm />
          <Divider />
          <Reset />
        </Container>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
