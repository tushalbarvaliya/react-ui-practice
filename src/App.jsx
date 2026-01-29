import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Navbar handel={setIndex} />
      {index == 0 && <Home />}
      {index == 1 && <Portfolio />}
      {index == 2 && <Team />}
      {index == 3 && <Contact />}
    </>
  );
}

export default App;
