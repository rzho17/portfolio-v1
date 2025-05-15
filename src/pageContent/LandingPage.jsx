import DarkMode from "../components/DarkMode";
import Button from "../components/Button";
import styles from "./LandingPage.module.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function LandingPage() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 120,
  });
  return (
    <>
      <section className={styles.landingPage} id="home">
        <header className={styles.landingBlur}>
          <DarkMode />

          <div className={styles.titleContainer}>
            <p className={styles.descriptor}>FRONT END</p>
            <div className={styles.headingContainer}>
              <p>Richard Ho</p>
              <h1>
                Web
                <span> {text}</span>
                <span className={styles.cursor}>
                  <Cursor />
                </span>
              </h1>
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
