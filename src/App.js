import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Carousel from "./components/layout/Carousel";
import Nav from "./components/shared/Nav";
import dress1 from "./img/content/img1.jpg";
import dress2 from "./img/content/img2.jpg";
import dress3 from "./img/content/img3.jpg";
const dummy = [dress1, dress2, dress3, dress1, dress2, dress3];
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Carousel data={dummy} />
    </div>
  );
}

export default App;
