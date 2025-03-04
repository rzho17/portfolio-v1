import styles from "./Works.module.css";

export default function Works() {
  return (
    <section className={styles.worksSection} id="projects">
      <div className={styles.projectContainer}>
        <h2>PROJECTS</h2>
        <p>click a project to see more!</p>

        <div className={styles.projectsWrapper}>
          <div className={styles.projectOne}>
            <video
              src="../public/assets/mobile short.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className={styles.projectTwo}>
            <video
              src="../public/assets/twelfth.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <div className={styles.projectsWrapper2}>
          <div className={styles.projectThree}></div>
          <div className={styles.projectFour}></div>
        </div>
      </div>
    </section>
  );
}
