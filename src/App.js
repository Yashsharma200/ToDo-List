
import './App.css';
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer"
import { AddTodo } from "./MyComponent/AddTodo"
import React, { useState, useEffect } from 'react';
import {About} from "./MyComponent/About"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // let myvariable =345;
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am on delete todo ", todo);
    //Deleting this way in react does not work
    // let index = todo.indexOf(todo);
    // todos.slice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this tode", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);

    // console.log(myTodo);
  }



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // {
  //   sno:1,
  //   title: "Go to the market",
  //   desc: "You need  to go to the market to get this job done"

  // },
  // {
  //   sno:2,
  //   title: "Go to the mall",
  //   desc: "You need  to go to the market to get this job done2"

  // },
  // {
  // //   sno:3,
  // //   title: "Go to the ghat",
  // //   desc: "You need  to go to the market to get this job done3"

  // }

  // ]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div>{myvariable}</div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>  
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

      <>
   
    <Router>
      <Header title="MyTodo List" searchBar={true} />
      <Switch>
          
          <Route  exact path="/" render={()=>{
            return (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
        <Footer />
      </Router>
      </> 
  );
}

export default App;
// for working on react router we need to install react-router-dom so write "npm install react-router-dom" in terminal or powerSell