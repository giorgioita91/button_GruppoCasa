import { useState } from "react";
import "./App.css";
// import Bottoni from './components/Bottoni';

function App() {
  //colore containerApp
  const [color, setColor] = useState("#3e3e3e");
  //colore bottone
  const [bottoneVerde, setBottoneVerde] = useState("#01e4e4");
  const [bottoneBlue, setBottoneBlue] = useState("#01e4e4");
  const [bottoneRosso, setBottoneRosso] = useState("#01e4e4");

  const handleColorB = () => {
    
  }

  const handleColorV = (colore) => {
    setColor(colore);
    setBottoneVerde(colore);
    // if (color !== colore) {
    //   setColor(colore);
    //   // setColoreBottone(colore);
    // }
  };

  return (
    <>
      <div
        className="app"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <button
        className="bottone1"
        style={{
          backgroundColor: bottoneVerde,
        }}
        onClick={() => handleColorV("#90ee90")}
      >
        Verde
      </button>
      <button
        className="bottone2"
        style={{
          backgroundColor: bottoneVerde,
        }}
      >
        Blue
      </button>
      <button
        className="bottone3"
        style={{
          backgroundColor: bottoneVerde,
        }}
      >
        Rosso
      </button>
    </>
  );
}

export default App;
