import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import Shelf from "./shelf/Shelf";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Shelf />
    </div>
  );
};

export default App;
