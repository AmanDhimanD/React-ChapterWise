import React from "react";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authenticate the user
    if (email == "dhiman@gamil.com" && password == "aman") {
      // Redirect to protected page
        alert("Logged In !!!")
        
    } else {
        // Display error message
        alert("Not Logged In !!!")
    }
  };
  return (
    <center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </center>
  );
};

export default App;
