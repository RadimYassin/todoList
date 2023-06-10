import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function AddItem({setTodos,todos}) {
const [title,setTitle]=useState("")
const [text,setText]=useState("")
  const hnadelAdd=(e)=>{
  e.preventDefault()
if(!text.length || !title.length) return

let id= todos.length ? todos[todos.length-1].id +1 : 1;
const newItem={id:id,text,title}

  setTodos([...todos,newItem])  



  setText("")
  setTitle("")
  }

  return (
    <Form className='w-50 m-5' onSubmit={hnadelAdd}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title :</Form.Label>
        <Form.Control 
         type="text" 
         placeholder="title"
         value={title}
         onChange={e=>setTitle(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>text</Form.Label>
        <Form.Control 
         type="text" 
         placeholder="text"
         value={text}
         onChange={e=>setText(e.target.value)}
         />
      </Form.Group>
      <Button type='submit' variant="primary">add </Button>{' '}
    </Form>
  );
}

export default AddItem
  
