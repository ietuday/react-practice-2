import React from "react";
import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  const buttonMarkup = (
    <div>
       <button className="button button2">YES</button>
        <button className="button button3">NO</button> 
    </div>
  );

  return (
    <div>
      <Card
        name={faker.name.findName()}
        imgUrl='https://www.computerhope.com/jargon/j/javascript.png'  
        designation={faker.name.jobTitle()}
      >
       {buttonMarkup}
      </Card>
      
    </div>
  );
}

export default App;
