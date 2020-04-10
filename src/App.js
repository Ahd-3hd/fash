import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Nav from "./components/shared/Nav";
import Promotion from "./components/layout/Promotion";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Promotion />
    </div>
  );
}

export default App;
