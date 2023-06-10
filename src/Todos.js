import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function Todos({todos,handelClik,handleShow,handleUpadate}) {


    const SelectId=(id)=>{
        handleUpadate(id);
    }
  return (
    <div style={{ margin:"40px" ,display:"flex",gap:"20px"}}>
      {
        todos?.map(i=>{
          return( 
            
            <Accordion style={{ width:"400px" }} key={i.id} defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>  {i.title} #{i.id}</Accordion.Header>
              <Accordion.Body>
          <h3>    {i.text}</h3>


              <Button onClick={()=>handelClik(i.id)} variant="danger">delete</Button>{' '}
              <Button variant="info" onClick={e=>{
                handleShow();
                SelectId(i.id)
              }}  >update</Button>{' '}

              </Accordion.Body>
              
            </Accordion.Item>
          </Accordion>
          )
        })
      }
    </div>
  )
}
