import styles from "./ContactInfo.module.css";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className={styles.infoLinks}>
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
    </div>
  );
}
