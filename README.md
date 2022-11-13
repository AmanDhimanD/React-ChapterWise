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
2. Use Effect API call
```
// Api call using Hooks
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
function UseEffect() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(err => {
            
            })
    }

    return (
        <div>
            <ul>
                {
                    posts.map(posts =><li key={posts.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default UseEffect

```
# 3. Increment/Decrement and Playsound
```
import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import useSound from "use-sound";
import mysound from './mysound.mp3';


function App() {
  const state = useState();
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  }
  const Decrement = () => {
    if (count <= 0) {
      count = 0
    }
    setCount(count - 1);
  }
  const Reset = () => {
    setCount(0);
  }
  
  const [playSound] = useSound(mysound);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter App</p>
        <p>{count}</p>
        <div>
          <Button variant="secondary" onClick={Increment}>Increment</Button>{' '}
          <Button variant="success" onClick={Decrement}>Decrement</Button>{' '}
          <Button variant="warning" onClick={Reset}>Reset</Button>{' '}
        </div>
       <br/>
        <Button onClick={playSound}>
          Play Sound
        </Button>
        
      </header>
    </div>
  );
}

export default App;

```
