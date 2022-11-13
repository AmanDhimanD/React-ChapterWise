## React Notes
# Basic Import / Export 
- Two files 
- 1. File 
- 2. Function 

### in File.js
```
import {sum,mul } from "./functions.mjs";

console.log(sum(2, 3))
console.log(mul(2, 3))

```
### in Function.js
```

// export function sum(a, b) {
//     return (a+b)
// }

function sum(a, b) {
    return (a + b)
}
function mul(a, b) {
    return (a*b)
}


export { sum, mul }
```


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
# 2. Use Effect API call
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

# 4. Weather API (setup)
```
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {

  const apiKey = "237f26ef48e0d8b465f9454a4ce0b3af";
  const [inputCity, setInputCity] = useState({});
  const [data, setData] = useState("")
  

  const getWeather = (cityName) => {
    if (!cityName) {
      return
    }
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("Response", res)
      setData(res.data)
    }).catch((err) => {
      console.log("Error", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value);
  }
  const handleSearch  = () => {
    getWeather(inputCity)
    
  }
    
  // useEffect(() => {
  //   getWeather()
  // },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Weather</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className='form-control' value={inputCity} onChange={handleChangeInput} />
          <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>
           
        </div>
      </header>
      {Object.keys(data).length > 0 &&
        <div className='col-md-12 text-center mt-5'>
          <div className="shadow rounded ">
          <h3>{data?.name}</h3>
          <h5>{data?.main?.temp}</h5>
          </div>
        </div>
}
    </div>
    
  );
}

export default App;

```
