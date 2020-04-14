import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Carousel from "./components/layout/Carousel";
import Promotion from "./components/layout/Promotion";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";
import dress1 from "./img/content/img1.jpg";
import dress2 from "./img/content/img2.jpg";
import dress3 from "./img/content/img3.jpg";
import abaya1 from "./img/content/abaya5.jpg";
import abaya2 from "./img/content/abaya6.jpg";
import abaya3 from "./img/content/abaya7.jpg";
import coat1 from "./img/content/img5.jpg";
import coat2 from "./img/content/img6.jpg";
import coat3 from "./img/content/img4.jpg";
const dummy = [dress1, dress2, dress3];
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Promotion data={dummy} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

{
  /* 
  const dummy = [dress1, dress2, dress3];
const dummy2 = [abaya1, abaya2, abaya3];
const dummy3 = [coat1, coat2, coat3];
  <Carousel
data={dummy}
text={{
  first_word: "CHIQUE",
  second_word: "DRESSES",
}}
/>
<Carousel
data={dummy2}
reverse
text={{
  first_word: "STYLISH",
  second_word: "ABAYA",
}}
/>
<Carousel
data={dummy3}
text={{
  first_word: "ELEGANT",
  second_word: "COATS",
}}
/> */
}
