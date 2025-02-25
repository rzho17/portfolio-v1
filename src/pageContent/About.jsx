import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.about}>
        <div className={styles.info}>
          <div className={styles.infoAbout}>
            <h3>About Me</h3>
            <h2>Here's some info about me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              fugit architecto quo tempora eius, quia quibusdam vel aut sit
              doloremque quas rerum sapiente minus aliquam exercitationem,
              maxime quisquam culpa reiciendis.
            </p>
            <div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <a href="">resume</a>
            </div>
          </div>
          <div className={styles.infoSkills}>
            <h3>Skills</h3>
            <h2>I use these tools</h2>
            <div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </div>
          </div>
        </div>

        <img src="../public/assets/darkBackground.jpg" alt="" />
      </div>
    </section>
  );
}
