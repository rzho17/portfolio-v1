import styles from "./Overlay.module.css";

export default function Overlay({ title, description, icons, siteUrl }) {
  return (
    <>
      <div className={styles.overlayBg}>
        <div className={styles.overlay}>
          <h4>Project Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            recusandae porro consequuntur eum repudiandae. Aliquam.
          </p>

          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>REACT</span>
          </div>

          <div className={styles.overlayBtns}>
            <a href="">
              <button className={styles.btn}>Code</button>
            </a>
            <a href="">
              <button className={styles.btn}>Live</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
