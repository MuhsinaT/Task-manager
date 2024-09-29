import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Features() {
  return (
    <>
      <div id='feature' style={{overflowX:'hidden'}}>
        <h5 style={{ textAlign: 'center' }}>Features</h5>
        <h2 style={{ textAlign: 'center' }}>Our Special Feature</h2>
        <Row className="g-4 mt-4" style={{ justifyContent: 'flex-start', marginLeft: '1rem' }}> {/* Added marginLeft here */}
          <Col sm={12} md={6} lg={4}>
            <Card  
              style={{ 
                width: '90%', 
                backgroundColor: '#fff', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                border: 'none',
                transition: 'transform 0.3s ease', 
              }} 
              className="feature-card"
            >
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>
                  <i className="fa-solid fa-users"  style={{fontSize:'2rem',color:'#603e21'}}/>
                </Card.Title>
                <Card.Subtitle className="mb-2" style={{textAlign:'center',fontSize:'1.5rem',color:'#4f3017'}}>User Friendly</Card.Subtitle>
                <Card.Text style={{fontSize:'0.9rem'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa harum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card  
              style={{ 
                width: '90%', 
                backgroundColor: '#fff', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                border: 'none',
                transition: 'transform 0.3s ease',
              }} 
              className="feature-card"
            >
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>
                  <i className="fa-solid fa-file"  style={{fontSize:'2rem',color:'#603e21'}}/>
                </Card.Title>
                <Card.Subtitle className="mb-2"  style={{textAlign:'center',fontSize:'1.5rem',color:'#4f3017'}}>Flexibility</Card.Subtitle>
                <Card.Text style={{fontSize:'0.9rem'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa harum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card 
              style={{ 
                width: '90%', 
                backgroundColor: '#fff', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                border: 'none',
                transition: 'transform 0.3s ease',
              }} 
              className="feature-card"
            >
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>
                  <i className="fa-solid fa-money-check" style={{fontSize:'2rem',color:'#603e21'}} />
                </Card.Title>
                <Card.Subtitle className="mb-2" style={{textAlign:'center',fontSize:'1.5rem',color:'#4f3017'}}>100% Free</Card.Subtitle>
                <Card.Text style={{fontSize:'0.9rem'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa harum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Adding hover styles */}
      <style>
        {`
          .feature-card:hover {
            transform: scale(1.05); 
            box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2); 
          }
        `}
      </style>
    </>
  );
}

export default Features;
