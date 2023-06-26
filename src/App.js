import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import "./assets/css/style.css"

function App() {

  return (
    <div className="App">
          <Header/>
          <Routes>
             <Route  path='/' element={< Home />}></Route>
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
