import "./styles.css";
import React, { useEffect, useState } from "react";

const useLocalStorageState = (key, value) => {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || value);
    } catch (e) {
      console.log(e);
      return value;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const [count, setCount] = useLocalStorageState("localStorage-count", 0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
