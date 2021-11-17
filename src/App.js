import Landing from "./components/pages/Landing";
import styles from "./App.module.css";

// we can set up routing, analytics, monitioring, etc. in here when necessary
function App() {
  return (
    <div className={styles.app}>
      <Landing />
    </div>
  );
}

export default App;
