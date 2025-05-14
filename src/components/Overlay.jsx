import styles from "./Overlay.module.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Overlay({
  title,
  description,
  tools,
  codeUrl,
  siteUrl,
  close,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <>
      <div className={styles.overlayBg}>
        <div className={styles.overlay}>
          {width <= 768 ? (
            <button className={styles.close} onClick={close}>
              <IoMdClose />
            </button>
          ) : null}
          <h4>{title}</h4>
          <p>{description}</p>

          <div className={styles.overlaySkills}>
            {tools.map((skill) => {
              return <span key={nanoid()}>{skill}</span>;
            })}
          </div>

          <div className={styles.overlayBtns}>
            <a href={codeUrl}>
              <button className={styles.btn}>Code</button>
            </a>
            <a href={siteUrl}>
              <button className={styles.btn}>Live</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
