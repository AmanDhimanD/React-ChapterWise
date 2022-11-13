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
3. 
