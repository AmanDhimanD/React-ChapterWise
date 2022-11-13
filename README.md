## React Notes

# 1. State Control 
```
import { useState } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h1> First Name is - {name.firstName} </h1>
        <h1> Last Name is - {name.lastName} </h1>
      </form>
    </div>
  );
}

export default App;


```
