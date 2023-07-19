import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HousingSheet from "./pages/HousingSheet/HousingSheet";
import Error from "./pages/Error/Error";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import reportWebVitals from "./reportWebVitals";
import { about, home, housings } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={housings} element={<HousingSheet />} />
        <Route path={about} element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
