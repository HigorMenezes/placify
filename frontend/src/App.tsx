import React from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <a href="http://localhost:3333/session">Login</a>
      <button
        onClick={() =>
          axios.get("http://localhost:3333/test", { withCredentials: true })
        }
      >
        Request
      </button>
    </div>
  );
}

export default App;
