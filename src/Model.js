import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Model({todos,setTodos,setShow,show,handleClose,id}) {
    const [title,setTitle]=useState("")
    const [text,setText]=useState("")

console.log(id);


const Update=()=>{

if (!title.length || !text.length) return 

setTodos(todos?.map(i=>{
    if (i.id ==id){
         return {...i,text,title}

    }
    return i


}))

setText("")
setTitle("")
 setShow(false)
}
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='w-50 m-5' >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title :</Form.Label>
        <Form.Control 
         type="text" 
         placeholder=" new title"
         value={title}
         onChange={e=>setTitle(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>text</Form.Label>
        <Form.Control 
         type="text" 
         placeholder="new text"
         value={text}
         onChange={e=>setText(e.target.value)}
         />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Update}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;