import DarkMode from "../components/DarkMode";
import Button from "../components/Button";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <section className={styles.landingPage} id="home">
        <header className={styles.landingBlur}>
          <DarkMode />
          {/* <img
            src="../public/assets/darkBackground.jpg"
            alt=""
            className={styles.background}
          />
          <img
            src="../public/assets/foreground.png"
            alt=""
            className={styles.foreground}
          /> */}
          <div className={styles.titleContainer}>
            <p className={styles.descriptor}>FRONT END</p>
            <div className={styles.headingContainer}>
              <p>Reggie Z</p>
              <h1>HELLO WORLD</h1>
              <div className={styles.headingButtons}>
                <a href="#home">
                  <Button text={"HOME"} />
                </a>
                <a href="#about">
                  <Button text={"ABOUT"} />
                </a>
                <a href="#projects">
                  <Button text={"PROJECTS"} />
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
