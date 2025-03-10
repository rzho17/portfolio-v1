import styles from "./ContactInfo.module.css";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

export default function ContactInfo() {
  return (
    <div className={styles.infoLinks}>
      <ul>
        <li>
          <a href="https://github.com/rzho17">
            <IoLogoGithub className={styles.infoIcon} />
          </a>
          Github
        </li>
        <li>
          <a href="https://www.linkedin.com/in/richard-h-089b6a230/">
            <FaLinkedin className={styles.infoIcon} />
          </a>
          LinkedIn
        </li>
        <li>
          <a href="">
            <FaInstagram className={styles.infoIcon} />
          </a>
          Socials
        </li>
        <li>
          <a href="">
            <BsFileEarmarkPersonFill className={styles.infoIcon} />
          </a>
          Resume
        </li>
      </ul>
    </div>
  );
}
