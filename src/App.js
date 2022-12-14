import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
