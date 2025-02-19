import DarkMode from "../components/DarkMode";
import Button from "../components/Button";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <section className={styles.landingPage}>
        <div className={styles.landingBlur}>
          <div className={styles.titleContainer}>
            <div className={styles.headingContainer}>
              <h1>HELLO WORLD</h1>
              <div className={styles.headingButtons}>
                <Button text={"HOME"} />
                <Button text={"ABOUT"} />
                <Button text={"PROJECTS"} />
              </div>
            </div>
          </div>
        </div>
        <DarkMode />
      </section>
    </>
  );
}
