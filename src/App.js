import Header from "./Components/Layout/Header";
import classes from "./App.module.css";
import CV from "./Components/CV/CV";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <CV />
    </div>
  );
}

export default App;
