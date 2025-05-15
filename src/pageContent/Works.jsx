import styles from "./Works.module.css";
import Overlay from "../components/Overlay";
import { useState } from "react";

export default function Works() {
  const skills = ["HTML", "CSS", "JS", "REACT"];

  const [activeP1, setActiveP1] = useState(false);
  const [activeP2, setActiveP2] = useState(false);
  const [activeP3, setActiveP3] = useState(false);
  const [activeP4, setActiveP4] = useState(false);

  const changeOverlay = (projectActive) => {
    projectActive((value) => !value);
  };

  const info = [
    {
      title: "Portfolio V1",
      description:
        "My first portfolio displaying projects I made for the Odin Project and some personal projects.",
      tools: skills,
      codeUrl: "https://github.com/rzho17/portfolio-v1",
      siteUrl: "",
    },
    {
      title: "Calmodoro",
      description:
        "A pomodoro timer with a focus on chill vibes, play lofi tunes, add tasks, and customize to your needs.",
      tools: skills,
      codeUrl: "https://github.com/rzho17/pomodoro-timer",
      siteUrl: "https://calmodoro.netlify.app/",
    },
    {
      title: "Battleship",
      description:
        "The classic game of battleship, built in base JS to learn how to use constructors, classes, and practice game logic",
      tools: ["HTML", "CSS", "JS"],
      codeUrl: "https://github.com/rzho17/battleship",
      siteUrl: "https://rzho17.github.io/battleship/",
    },
    {
      title: "Twelfth",
      description:
        "A front end shopping website I built to practice UI design and front end skills",
      tools: skills,
      codeUrl: "https://github.com/rzho17/react-shopping-cart",
      siteUrl: "https://twelfth-shop-cart.netlify.app/",
    },
  ];
  return (
    <section className={styles.worksSection} id="projects">
      <div className={styles.projectContainer}>
        <h2>PROJECTS</h2>
        <p>click a project to see more!</p>

        <div className={styles.projectsWrapper}>
          <div
            className={styles.projectOne}
            onMouseEnter={() => changeOverlay(setActiveP1)}
            onMouseLeave={() => changeOverlay(setActiveP1)}
          >
            <video
              src="../public/assets/portv1.mp4"
              autoPlay
              muted
              loop
            ></video>
            {activeP1 ? (
              <Overlay
                title={info[0].title}
                description={info[0].description}
                tools={info[0].tools}
                codeUrl={info[0].codeUrl}
                siteUrl={info[0].siteUrl}
                close={() => changeOverlay(setActiveP1)}
              />
            ) : null}
          </div>
          <div
            className={styles.projectTwo}
            onMouseEnter={() => changeOverlay(setActiveP2)}
            onMouseLeave={() => changeOverlay(setActiveP2)}
          >
            <video src="../public/assets/pomo.mp4" autoPlay muted loop></video>
            {/* <Overlay /> */}

            {activeP2 ? (
              <Overlay
                title={info[1].title}
                description={info[1].description}
                tools={info[1].tools}
                codeUrl={info[1].codeUrl}
                siteUrl={info[1].siteUrl}
                close={() => changeOverlay(setActiveP2)}
              />
            ) : null}
          </div>
        </div>
        <div className={styles.projectsWrapper2}>
          <div
            className={styles.projectThree}
            onMouseEnter={() => changeOverlay(setActiveP3)}
            onMouseLeave={() => changeOverlay(setActiveP3)}
          >
            <video
              src="../public/assets/battle.mp4"
              autoPlay
              muted
              loop
            ></video>
            {activeP3 ? (
              <Overlay
                title={info[2].title}
                description={info[2].description}
                tools={info[2].tools}
                codeUrl={info[2].codeUrl}
                siteUrl={info[2].siteUrl}
                close={() => changeOverlay(setActiveP3)}
              />
            ) : null}
          </div>
          <div
            className={styles.projectFour}
            onMouseEnter={() => changeOverlay(setActiveP4)}
            onMouseLeave={() => changeOverlay(setActiveP4)}
          >
            <video
              src="../public/assets/twelfth.mp4"
              autoPlay
              muted
              loop
            ></video>
            {activeP4 ? (
              <Overlay
                title={info[3].title}
                description={info[3].description}
                tools={info[3].tools}
                codeUrl={info[3].codeUrl}
                siteUrl={info[3].siteUrl}
                close={() => changeOverlay(setActiveP4)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
