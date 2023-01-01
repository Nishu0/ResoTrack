import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <hr className={styles.line}></hr>
      <section className={styles.footerText}>
        <h3>
          Made by Nisarg Thakkar <i>(Nishu0)</i>
        </h3>
        <a className={styles.link} href="www.github.com/Nishu0">
          GitHub
        </a>
      </section>
    </footer>
  );
};

export default Footer;
