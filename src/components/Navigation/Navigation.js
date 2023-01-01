import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={styles.navBar}>
        <h1 className={styles.title}>ResoTrack</h1>
        <section className={styles.linkList}>
          <Link to="/" className={styles.link}>
            Habits
          </Link>
          <Link to="/create" className={styles.link}>
            Create
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </section>
      </header>
      <hr className={styles.line} />
    </>
  );
};

export default Navigation;
