### React-ChapterWise
- Start React chapter with diffrent Branches
- 1. JSX
- 2. React Router

# 1. Props
Props come from properties and are a fundamental concept that underlies a lot of things in React. With it, we can transmit data between components. This data can have any type ( String, Int, Array, Object, etc.). This way, we can create and style components without the need for static values.
# 2. State
Through this concept, it is possible to have reactive components that are capable of storing values. We also have the idea of immutability here, according to which it is recommended never to make changes directly to the component’s state. In other words, avoid changing the value manually, as this ends up generating an error and crashing your component. So the ideal is that there is an evolution of this state.
Thus, within the same project, we can have several different values ​​associated with the component. Since its structure is very flexible, it can receive almost any data.
# 3. setState
As I said above, according to immutability, it is not recommended to take the value and change it manually. So, to avoid this problem, the state function makes modifications to components. Whenever an element of the state is modified, the component is re-rendered, changing only what is necessary. This is important as you will often have states changing their value, so we need to ensure that everything will render correctly.
# 4. Life Cycles
Lifecycles represent the moments of the component during its use. Basically, there are three different moments:
Mounting
Update
Disassembly
From there, we control when actions can take place. If we want certain data to be loaded before creating the component structure, we can use a function called componentDidMount, and so on.
# 5. Components
Components are the stars of almost every Framework or library because we have code that can be easily reused anywhere in the application.
This code has its own internal logic, but it can still communicate with other components. These components can create the entire visual part of the project, but they can also have some business logic contained in Frontend.
There are 2 types of components in React, the Class-based and the Functional components. The choice depends on what you are most comfortable using and whether you have mastered the concepts of Hooks (in the case of Functional components).
# 6. Hooks
This is the most popular term in React, which changed many things that were already in existence before. The functional components acquired a large autonomy, as before we couldn’t create states in functional components and things like that, but now it’s simple.
In addition to state, you can do a series of activities to simplify functions within React, such as having a mini-state manager with ContextAPI that is an alternative to Redux, controlling what will be modified, and turning Hooks into the preferred tools of many developers.
I hope these concepts have become clearer to you! Understanding these will make your journey much easier and smoother.





# Chapter 1
### Starting with Routes
- Install the **npm install react-routes-som**
```
npm install react-router-dom@6
```
- First Add BrowserRouter in the Index.js 
```
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```
- Second add the Routes tag and inside the tag add route with path 
```
<Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
</Routes>
```

- Create the some pages like about home contact in the src/pages/home.js about.js contact.js
- Add some tag data, For the navitage to the pages easily 
```
<Link to="/about">Click About</Link>
<Link to="/contact">Click contact</Link>
```
## Example:- Step Routing in ReactJS
###### After Install the React Router Dom V6 
- in **index.js** add BrowserRouter
- in **App.js** first add the Navbar as a tag then add Routes and then inside it add Route with *path* and *element*
```
      <TopNavbar title="RayneCoder" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
```
- in **TopNavbar** add the Link as a link like -> *as={Link}* in the Nav.Link
```
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav>
```
# Chpater 2
### Style CSS
- Inline 
```
 <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
```
- As an Object 
```
const Home = () => {
  const myStyle = {
    padding: 50,
  }
  const name = "RayneCoder"
  return (
    <div className="" style={myStyle}>
      <Container>
        <h2>Hello,{name}</h2>
      </Container>
    </div>
  );
};
```
- Import the CSS files in the Js file

# Chpater 3
### Hooks
- Import useState form the react 
```
import React, { useState } from 'react';
```
then 
```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
# Chapter 4 
### Axios 
- First install the Axios library 
```
npm i axios
```
- API JSON files ( Get Key Access)
```
unplash 
news api and so on 
```
- Create a function to write the API endpoints 
```
 const fetchNewsIndia = () => {
    //end points
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0f7f878ac90f474ab45338e9dcc3ef2f"
      )
      .then((response) => {
        //console.log(response); //for cheack on Console 
        setNews(response.data.articles);
      })
      .catch((err) => {});
  };
```
- use useState to store the data
```
const [news, setNews] = useState([]);
```
- Complete Axios Example 
```
import React, { useState } from "react";
import axios from "axios";

const FetchNews = () => {
  const [news, setNews] = useState([]); //to save the response

  const fetchNewsIndia = () => {
    //end points
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0f7f878ac90f474ab45338e9dcc3ef2f"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      })
      .catch((err) => {});
  };
  
  return (
    <>
    {/* onClick call the Function */}
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h4>
              Country News:-
              <button className="btn btn-primary mx-1" onClick={fetchNewsIndia}>
                India
              </button>
            </h4>
          </div>
        </div>
      </div>
      
      {/* Display the data */}
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4 my-2">
                <div className="card" style={{ width: "18rem;" }}>
                  <img src={value.urlToImage} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.tittle}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;

```
# Chapter 5
- Customize Hooks
- Memo
- useStates 



# React Bootstrap 
## Step to use React bootstrap in react file with Routers 

### Steps
- Install React Bootstrap 
```
  npm install react-bootstrap bootstrap
```
- Add these Links into the index.html page 
* path --  public -> index.js
```
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin>
</script>
<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>
<script>var Alert = ReactBootstrap.Alert;</script>

```
and also add this CSS link in the Index.html page
```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
```
- Use Routes with Link Tag 
- ***Use Link tag insead of Nav.Link***
```
  <Link to="/home" className="nav-item">Home</Link>
  <Link to="/about" className="nav-item">About</Link>
  <Link to="/contact" className="nav-item">Contact Us </Link>
```

- Use of the style as {{}} in the tag 
```
Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, 
the styling in the example above is written inside two sets of curly braces {{}}.
```

## Import the css in the react 

- write the direct name of the css file as the import format like
```
import './App.css'
import './Background.css
```
- then we can direct use the Css in react app

## Using of Material UI in react 
- [DEV.to](https://dev.to/raynecoder/using-material-ui-in-react-project-30n5)

## Scroll the image effect 
- Coding Help

## Local Storage
**in src/hooks/useLocalStorage.js**
 ```
 import React, { useState } from 'react'

const useLocalStroage = (key,defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
            else {
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue
            }
        }
        catch (error) {
            return defaultValue
        }
    })
    const setValue = newValue => {
        try {
            localStorage.setItem(key,JSON.stringify(newValue))
        }
        catch (error) {
            console.log(error)
        }
        setStoredValue(newValue)
    }
    return [storedValue,setValue]
}

export default useLocalStroage
 ```
 
 *** in app.js ***
 ```
 import './App.css';
import useLocalStorage from '../src/hooks/useLocalStroage'

function App() {
  const [message, setMessage] = useLocalStorage('message', 'Hello World')
  const [token, setToken] = useLocalStorage('token', 123);

  const handleSetDefault = () => {
    setMessage("Hello World")
    setToken(123)
  }

  return (
    <>
      <div>
        <h3>{message}</h3>
        <p>{token}</p>
        <button onClick={()=>setMessage('Tata')}>Message</button>
        <button onClick={()=>setToken(3434)}>Token</button>
        <button onClick = {handleSetDefault}>default</button>
      </div>
    </>
  );
}

export default App;

 ```
## Login Form 
To create a login page in React, you can use React components and forms to handle the user input and authentication. Here is an example of how you might do this:

Create a React component for the login form, which includes inputs for the user's email and password, as well as a submit button:
```
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Authenticate the user here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};
```
In the handleSubmit method, authenticate the user by checking their email and password against a database or other source of truth. If the authentication is successful, redirect the user to the protected page. Otherwise, display an error message.
```
const handleSubmit = e => {
  e.preventDefault();
  // Authenticate the user
  if (authenticateUser(email, password)) {
    // Redirect to protected page
  } else {
    // Display error message
  }
};
```
Use the LoginForm component in the main login page, which can include additional components and layout elements as needed.
```
import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <div>
    <h1>Log in</h1>
    <LoginForm />
  </div>
);
```
This is just one way to create a login page in React. There are many other ways you can do this, so be sure to explore your options and choose the approach that works best for your project.


## Use of Parms hook (useParams)
```
import React from "react";

import {
BrowserRouter as Router,
Switch,
Route,
useParams
} from "react-router-dom";

function BlogPost() {
let { id } = useParams();
return <div style={{ fontSize: "50px" }}>
		Now showing post {id}
		</div>;
}

function Home() {
return <h3>home page </h3>;
}

function App() {
return (
	<Router>
	<Switch>
		<Route path="/page/:id">
		<BlogPost />
		</Route>
		<Route path="/">
		<Home />
		</Route>
	</Switch>
	</Router>
);
}

export default App;

```
***NOTE*** ⛔💲
- if we enter the url as localhost:3000/12332 
- it print 12332 on the page 

***Upload the Screenshots Now***

## Create a Json Server 

How to Make your own RestAPI ? 

- 1. install JSON Server 
``` npm install -g json-server  ```

``` -g is use for the globally install ```

- 2. create a file as DB.json 
```
{
  "employees": [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ]
}
```
- 3. Run the Server 
```json-server --watch DB.json```

**you get the link of local server **
--
- For change the Port use this command
```json-server --watch db.json --port 3004```


## Create a Search Button with UseEffect() Hook 

- Step to Create a search Bar in react js 
```https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/amp/```
-----
- 1. use effect with axios 
- 2. map the data

**Example:**
 ```
 const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <input icon="search" placeholder="Search..." />
        {APIData.map((item) => {
            return (
              <>
                <p>{item.name}</p>
                <p>{item.email}</p>
              </>
          );
        })}
    </div>

```
- 3. useState for state managing 
```
const [searchInput, setSearchInput] = useState('');

and function 
const searchItems = () => {
        
}
```

- 4. Complete Structure
```
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestingComponents() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </>
              );
            })
          : APIData.map((item) => {
              return (
                <>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </>
              );
            })}
      </div>
    </div>
  );
}
```

## Use The Params() Method 
- App.js -> Call the React Router with the :id 
```
<Routes>
        <Route path="/coin/:d" element={<Coin />}  />
</Routes>
```
- Make one Page as COIN Component
```
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Component/Loading";

const Coin = () => {
  const paramsData = useParams();
  const { d } = paramsData;
  const [u, sUser] = useState([]);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${d}`)
      .then((res) => res.json())
      .then((data) => {
        sUser(data);
        //console.log(data);
        setCheck(false);
      });
  }, []);
  return (
    <>
      {/* Use params here to  navigate the Coin pages */}

      {/* <p>{props.name}</p> */}
      {/* <Link to="/coins">{props.name}</Link> <br /> */}

      {/* <p>This is use by {d.name}</p> */}
      <center>
        {check ? (
          <Loading />
        ) : (
          <>
            <p>
              <b>Name:</b> {u.name}
            </p>
            <p>
              <b>User Name:</b> {u.username}
            </p>
            <p>
              <b>Email: </b>
              {u.email}
            </p>
            <p>
              <b>Website:</b> {u.website}
            </p>
            <Link to="/">Go the Home</Link>
          </>
        )}
      </center>
    </>
  );
};

export default Coin;

```
