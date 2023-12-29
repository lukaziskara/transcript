import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import Things from "./pages/Things";
import Videos from "./pages/videos/Videos";

import AboutIdea from "./pages/AboutIdea";
// import AboutGame from "./pages/AboutGame";
// import Game from "./pages/Game";
// import GameProd from "./pages/GameProd";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const [partOfApp, setPartOfApp] = useState("startingPage");
  console.log("app started");
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things" element={<Things />} />
          <Route path="/about-idea" element={<AboutIdea />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/videos" element={<Videos />} />
          {/* <Route path="/game" element={<Game />} />
          <Route path="/about-game" element={<AboutGame />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
