import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";
const Habits = () => {
  const images = [
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/man-running_1f3c3-200d-2642-fe0f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/woman-in-lotus-position_1f9d8-200d-2640-fe0f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/man-lifting-weights_1f3cb-fe0f-200d-2642-fe0f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/zzz_1f4a4.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/writing-hand_270d-fe0f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/red-apple_1f34e.png",
  ];
  return (
    <>
      <Navigation />
      <main className={styles.layout}>
        <section className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            ResoTrack:Your personal goal achievement assistant.{" "}
          </h1>
          <Link to="/">
            <button className={styles.heroButton}>Get Started</button>
          </Link>
        </section>
        <section className={styles.heroGraphic}>
          <div className={styles.heroImages}>
            {images.map((image) => {
              return (
                <div className={styles.heroImageBox}>
                  <img src={image} alt={image}></img>
                </div>
              );
            })}
          </div>
          <div className={styles.heroFeatures}>
            <h2 className={styles.heroFeature}>
              <i>Track</i>
            </h2>
            <h2 className={styles.heroFeature}>
              <i>Achieve</i>
            </h2>
            <h2 className={styles.heroFeature}>
              <i>Grow</i>
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Habits;
