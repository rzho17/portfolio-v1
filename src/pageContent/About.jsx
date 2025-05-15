import styles from "./About.module.css";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import ContactInfo from "../components/ContactInfo";
export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.about}>
        <div className={styles.info}>
          <div className={styles.infoAbout}>
            <div>
              <h3>ABOUT ME</h3>
            </div>
            <div>
              <h2>Here's some info about me</h2>
              <p>
                Hey! I’m Richard, I enjoy learning new things and building cool
                stuff. I’m always looking for ways to grow and challenge myself.
                Whether it’s working on web projects, diving into new skills, or
                just figuring things out one step at a time, I’m all about
                improving and having fun along the way. When I’m not working,
                you’ll probably find me making some new food, exploring
                supermarkets, or blundering in chess.
              </p>

              <ContactInfo />
              {/* <div className={styles.infoLinks}>
                <a href="https://github.com/rzho17">
                  <IoLogoGithub className={styles.infoIcon} />
                </a>
                <a href="https://www.linkedin.com/in/richard-h-089b6a230/">
                  <FaLinkedin className={styles.infoIcon} />
                </a>
                <a href="">
                  <FaInstagram className={styles.infoIcon} />
                </a>
                <a href="">resume</a>
              </div> */}
            </div>
          </div>
          <div className={styles.infoSkills}>
            <div>
              <h3>SKILLS</h3>
            </div>
            <div>
              <h2>I use these tools</h2>
              <ul className={styles.skills}>
                <li>
                  <FaHtml5 />
                  HTML
                </li>
                <li>
                  <FaCss3Alt />
                  CSS
                </li>
                <li>
                  <IoLogoJavascript />
                  JavaScript
                </li>
                <li>
                  <FaReact />
                  React
                </li>
                <li>
                  <FaFigma />
                  Figma
                </li>
                <li>
                  <FaGitAlt />
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img src="../public/assets/lightBackground.jpg" alt="" />
      </div>
    </section>
  );
}
