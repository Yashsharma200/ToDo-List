import React from 'react'
import {TodoValue} from "../MyComponent/TodoValue";

export const Todos = (props) => {
  let myStyle ={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
       <h3 >ToDOs List</h3>
       {props.todos.length ===0 ? "No Todos to display": 
          props.todos.map((todos)=>{
            return(
             
             <TodoValue todo={todos} key={todos.sno} onDelete={props.onDelete}/>
           
            
            )
          })
       
       }
    </div>
  )
}
