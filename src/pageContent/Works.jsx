import styles from "./Works.module.css";
import Overlay from "../components/Overlay";
import { useState } from "react";

export default function Works() {
  const skills = ["HTML", "CSS", "JS", "REACT"];

  const [active, setActive] = useState(false);

  const changeOverlay = () => {
    setActive((value) => !value);
  };
  return (
    <section className={styles.worksSection} id="projects">
      <div className={styles.projectContainer}>
        <h2>PROJECTS</h2>
        <p>click a project to see more!</p>

        <div className={styles.projectsWrapper}>
          <div
            className={styles.projectOne}
            onMouseEnter={changeOverlay}
            onMouseLeave={changeOverlay}
          >
            <video
              // src="../public/assets/.mp4"
              autoPlay
              muted
              loop
            ></video>
            {/* <Overlay
              title={"Test Project"}
              description={
                "This is a tester paragraph for my overlay! I hope this looks good!"
              }
              tools={skills}
              close={changeOverlay}
            /> */}
            {/* {active ? (
              <Overlay
                title={"Test Project"}
                description={
                  "This is a tester paragraph for my overlay! I hope this looks good!"
                }
                tools={skills}
              />
            ) : null} */}
          </div>
          <div className={styles.projectTwo}>
            <video src="../public/assets/pomo.mp4" autoPlay muted loop></video>
            {/* <Overlay /> */}
            <Overlay
              title={"Test Project"}
              description={
                "This is a tester paragraph for my overlay! I hope this looks good!"
              }
              tools={skills}
              close={changeOverlay}
            />
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
