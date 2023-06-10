import React, { useState } from 'react';


import AddItem from './AddItem';
import Todos from './Todos';
import Model from './Model';
function App() {
  const [todos,setTodos]=useState([])

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const handleUpadate=(id)=>{
  setId(id);
}

  const handeldelete = (id)=>{
    const allItems=todos.filter(i=>i.id!=id)

    setTodos(allItems);
  }
  return (
    <div className="App">

       <AddItem 
       todos={todos} 
       setTodos={setTodos}/>
       <Todos
        handleUpadate={handleUpadate} 
        handleShow={handleShow}
        todos={todos}
        handelClik={handeldelete}/>
       <Model
       
        id={id} 
        handleUpadate={handleUpadate} 
        handleClose={handleClose} 
        show={show} 
        setShow={setShow}
        todos={todos}
        setTodos={setTodos}
        
        />
    </div>
  );
}

export default App;
