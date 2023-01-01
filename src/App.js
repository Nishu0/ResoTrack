import "./App.css";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import About from "./pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([
    {
      id: uuidv4(),
      emoji:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/person-running_1f3c3.png",
      habit: "Run Everyday",
      goal: 8,
      done: 3,
    },
    {
      id: uuidv4(),
      emoji:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/droplet_1f4a7.png",
      habit: "Drink Water",
      goal: 10,
      done: 5,
    },
    {
      id: uuidv4(),
      emoji:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/zzz_1f4a4.png",
      habit: "Sleep",
      goal: 12,
      done: 10,
    },
  ]);

  return (
    <main>
      <BrowserRouter>
        <section className="App">
          <Routes>
            <Route
              path="/"
              element={<Home info={info} setInfo={setInfo} />}
              exact
            />
            <Route
              path="/create"
              element={<Create info={info} setInfo={setInfo} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  );
}

export default App;
