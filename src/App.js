import React, { useState } from "react";
import "./styles/App.css";
import Heading from "./components/Heading";
import Canvas from "./components/Canvas";
import Button from "./components/Button";
import { allPossibleColors, changeImagePatterns } from "./utils";

function App() {
  const [currentImage, setImage] = useState([...allPossibleColors]);

  const handleImageChange = () => {
    let image = [...allPossibleColors];
    image.sort(changeImagePatterns());
    setImage([...image]);
  };

  return (
    <div className="App">
      <Heading />
      <Canvas currentImage={currentImage} />
      <Button handleClick={handleImageChange} />
    </div>
  );
}

export default App;
