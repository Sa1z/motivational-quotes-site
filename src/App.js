import { useEffect, useState } from "react";

import Quote from "./Quote";
import Button from "./Button";

const API_URL = 'https://zenquotes.io/api/random'

function App() {

  const searchQuotes = async (url) => {
    const response = await fetch(url)
    const data = await response.json();

    console.log(data)
  }



  useEffect(() => {
    searchQuotes(API_URL);
  }, [])

  return (
    <div className="App">
      <Quote />
      <Button />
      <footer className="links">Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></footer>
    </div>
  );
}

export default App;
