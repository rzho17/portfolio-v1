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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                fugit architecto quo tempora eius, quia quibusdam vel aut sit
                doloremque quas rerum sapiente minus aliquam exercitationem,
                maxime quisquam culpa reiciendis.
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
