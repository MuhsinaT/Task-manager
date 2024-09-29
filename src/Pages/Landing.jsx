import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Features from '../Components/Features';

function Landing() {
  return (
    <div className="landing-container">
      <Container fluid style={{ height: '100vh', overflowX: 'hidden' }}>
        <Row className="h-100">
          {/* First Column */}
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <div style={{ marginLeft: '20px' }}>
              <h1>Manage Your Tasks Quickly...!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis odio veniam magni. Aut hic nemo
                provident doloribus? Ipsa officia explicabo facilis iusto quo quis distinctio nobis, repudiandae,
                maiores modi exercitationem.
              </p>
              <Link to={'/home'} className='btn' style={{ backgroundColor: ' #E1B995' }}>Manage Tasks</Link>

            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <img
              src="https://img.freepik.com/free-vector/manager-prioritizing-tasks-list_74855-5272.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid"
              alt="Task Manager Illustration"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>

      <Features/>
    </div>
  );
}

export default Landing;
