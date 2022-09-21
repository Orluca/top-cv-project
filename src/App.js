import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
