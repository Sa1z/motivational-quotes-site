import { useEffect, useState } from "react";

import Quote from "./Quote";
import Button from "./Button";
const API_URL = 'https://type.fit/api/quotes'



function App() {
  const [quotes, setQuotes] = useState([]);

  const searchQuotes = async (url) => {
    const response = await fetch(url)
    const data = await response.json();

    setQuotes(data[Math.floor(Math.random() * data.length)])
  }



  useEffect(() => {
    searchQuotes(API_URL);
  }, [])

  return (
    <div className="App">
      <Quote quote={quotes}/>
      <button className="btn" onClick={() => searchQuotes(API_URL)}>New Quote</button>
      <footer className="link">Quotes graciously provided by: <a href="https://type.fit">Type.fit</a></footer>
    </div>
  );
}

export default App;
