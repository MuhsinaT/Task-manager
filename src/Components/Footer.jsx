import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>

  <div  style={{overflowX:'hidden'}} className='mt-5'>
      <Row style={{backgroundColor:'#F6EADF'}}>
    
        <Col sm={12} md={5} className='mt-2 '>
        <h3 >Tasking</h3>
        <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores reiciendis tenetur culpa, impedit ipsa, natus magnam aliquam et amet ab soluta porro! Reprehenderit distinctio quibusdam consectetur temporibus modi delectus!
        </p>
        </Col>
    
        <Col sm={12} md={4}>
        <div className='d-flex flex-column mt-4'>
            <Link to={'/'} className="mb-3">Landing</Link>
            <Link to={'/home'} >Home</Link>
        </div>
        </Col>
    
        <Col sm={12} md={3}>
        <input type="text" className='form-control mt-4' placeholder='enter message' />
        <button className='btn'>Send</button>
        </Col>
      </Row>
  </div>


  
  
  
  </>
  )
}

export default Footer
