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
              // src="../public/assets/.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className={styles.projectTwo}>
            <video src="../public/assets/pomo.mp4" autoPlay muted loop></video>
          </div>
        </div>
        <div className={styles.projectsWrapper2}>
          <div className={styles.projectThree}>
            <video
              src="../public/assets/battle.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className={styles.projectFour}>
            <video
              src="../public/assets/twelfth.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
