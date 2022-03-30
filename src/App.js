import { useEffect, useState } from "react";

import Quote from "./Quote";
import Button from "./Button";

function App() {
  return (
    <>
      <Quote />
      <Button />
      <footer className="links">&copy; 2022</footer>
    </>
  );
}

export default App;
