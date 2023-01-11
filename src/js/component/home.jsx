import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
  const [inputValue, setInputValue ] = useState("");
  const [todos, setTodos ] = useState([]);
  
  return (
    
    <div className="container d-flex justify-content-center mt-100"> 
    
      <div className="card d-flex " style={{width: "18rem"}}>
      <div className="card-header text-center text-secondary w-100 p-4 ">
    To Do List
  </div> 
        <ul className="list-group list-group-flush mb-0 p-0 border border-secondary">
          <li className="list-group-item p-3 bg-light border border-secondary" >
          <input className="w-100 p-2" type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyPress={(e) => {
          //console.log("key was pressed", e.key)
          if(e.key === "Enter") { 
            //console.log("enter was pressed");
             setTodos(todos.concat([inputValue]));
             setInputValue("");
            }
          }}
         placeholder="What do you need to do?"></input>
      </li>
      {todos.map((item, index) => (
      <li>
      {item}{""} 
      <i class="fas fa-trash-alt" 
      onClick={() => 
        setTodos(
        todos.filter(
          (t, currentIndex) => 
          index != currentIndex
          )
          )
          
          }></i>
     </li>
     ))}
             
          
        </ul>
        <div> {todos.length}</div>
      </div>
      
    </div>
  );
};

export default Home;
