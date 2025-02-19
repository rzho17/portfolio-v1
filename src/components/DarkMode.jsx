import Button from "./Button";

export default function DarkMode() {
  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const setTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <>
      <input type="checkbox" onChange={setTheme} />
    </>
  );
}
