import React, { useState } from 'react';

const App = () => {

let time = new Date().toLocaleTimeString();

const [cTime, setCTime] = useState(time);

  return(
      <>
          <h1> {cTime} </h1>
      </>
  );
}  

export default App;