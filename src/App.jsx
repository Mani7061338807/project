import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Logo,
  Header,
  Brand,
  AboutMe,
  Services,
  Project,
  Rating,
  FaQ,
  ContactUS,
  Footer,
  Process,
  Portfolio,
  Members,
} from "./Index";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Logo />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/members" element={<Members />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
