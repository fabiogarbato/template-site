import './index.css';
import React from 'react';
import {Container, Carousel, Row, Col}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid style={{ backgroundColor: '#F5DEB3', minHeight: '100vh' }}>
        <Navbar bg="blue" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'white' }}>  Home  </Nav.Link>
                    <Nav.Link href="#link" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'white' }}>Pagina 1</Nav.Link>
                    <Nav.Link href="#link" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'white' }}>Pagina 2</Nav.Link>
                    <Nav.Link href="#link" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'white' }}>Pagina 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container fluid className="background-section">
            <Carousel>
                <Carousel.Item>
                    <div style={{ backgroundColor: 'red', width: '100%', height: '50vh' }}></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundColor: 'green', width: '100%', height: '50vh' }}></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundColor: 'black', width: '100%', height: '50vh' }}></div>
                </Carousel.Item>
            </Carousel>
        </Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'pink'}}>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span>Texto centralizado</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'green', height: '70vh'}}>
                    <span>Coluna da esquerda</span>
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'orange', height: '70vh'}}>
                    <span>Coluna da direita</span>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default App;