import React, { useState } from 'react';
import './App.css';

function App() {
  const apiUrl = `https://icanhazdadjoke.com/`;
  const [isLoading, setIsLoading] = useState();
  const [randomJoke, setRandomJoke]=useState();

  const handleClick = () => {
      getJoke();
  }

  async function getJoke () {
    setIsLoading(true)
    await fetch(apiUrl, {headers: {'Accept': 'application/json'}})
    .then((res) => res.json())
    .then((res)=> {
      setRandomJoke(res.joke);
      setIsLoading(false)
      console.log(randomJoke)
    })
    
  }

  return (
    <div className="App">
      <h1>This is a joke</h1>
      <p>{isLoading? "loading ..." : 
          randomJoke? randomJoke :
          null}</p>
      
      <button onClick={handleClick}>Next joke</button>
    </div>
  );
}

export default App;
