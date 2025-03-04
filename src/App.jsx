import { useState } from "react";

import "./App.css";
import LandingPage from "./pageContent/LandingPage";
import Main from "./pageContent/Main";
import FooterPage from "./pageContent/FooterPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
      <Main />
      <FooterPage />
    </>
  );
}

export default App;
