import React, { useState, Provider } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

export const ThemeContext = React.createContext();

function App() {
  const [state, setState] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  // Hell

  return (
    <>
      <div className="App">
        <ThemeContext.Provider value={state}>
          <Navbar />
          <BookList />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
