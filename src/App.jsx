import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import About from "./components/About";
import Mac from "./components/Mac";
import IphoneStore from "./components/IphoneStore";

const App = () => {
  return (
   <main>
    {/* <Navbar />
    <Hero />
    <Highlights />
    <Model /> */}
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-animation" element={<About />} />
        <Route path="/animated-model" element={<Mac />} />
        <Route path="/gsap-bg-scroll" element={<IphoneStore />} />
      </Routes>
    </Router>
   </main>
  );
};

export default App;

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Model />
    </div>
  );
};
