import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1 className={styles["app-header"]}>CV Creator</h1>
    </header>
  );
}

export default Header;
