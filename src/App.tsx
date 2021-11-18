import { FC } from "react";
import Header from "./components/modules/Header";
import Landing from "./components/pages/Landing";
import styles from "./App.module.css";

// set up routing, analytics, monitioring, etc. in here when necessary
const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Landing />
    </div>
  );
};

export default App;
