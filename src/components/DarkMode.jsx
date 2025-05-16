import styles from "./DarkMode.module.css";

export default function DarkMode() {
  // sets the dark mode by setting the active data theme
  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDark();
  } else {
    setLight;
  }

  const setTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <label htmlFor="checkbox" className={styles.switch}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="checkbox"
            onChange={setTheme}
            defaultChecked={selectedTheme === "dark"}
          />
          <div className={`${styles.slider} ${styles.round}`}></div>
        </label>
      </div>
    </>
  );
}
