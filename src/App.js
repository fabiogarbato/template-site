import './index.css';
import React from 'react';
import {Container, Carousel, Row, Col}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/55${phoneNumber}?text=Adorei%20seu%20artigo`;
    return (
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    );
  };

function App() {
  return (
    <Container fluid style={{ backgroundColor: '#F5DEB3', minHeight: '100vh' }}>
        <Navbar id = 'home' bg="blue" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>  Home  </Nav.Link>
                    <Nav.Link href="#pagina1" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Página 1</Nav.Link>
                    <Nav.Link href="#pagina2" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Pagina 2</Nav.Link>
                    <Nav.Link href="#pagina3" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Pagina 3</Nav.Link>
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
        <Container id='pagina1' className='background-space'></Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'pink'}}>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span className='text-first'>Texto principal</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'green', height: '70vh'}}>
                    <span className='text-before'>Lorem ipsum odio faucibus elementum fames neque class pellentesque taciti, ut magna fermentum quis leo laoreet fusce potenti, augue ultrices etiam augue sed felis bibendum suspendisse. eu aliquam augue velit eu sollicitudin odio justo, blandit duis sit purus ultricies augue venenatis, neque purus habitant quis mi himenaeos. dolor laoreet eu congue nullam erat himenaeos dictum, inceptos varius nec vulputate ante donec vitae augue, auctor cursus molestie cursus euismod facilisis. commodo scelerisque nisi sed fermentum lacinia amet quisque maecenas accumsan, imperdiet varius ullamcorper orci felis quisque sem habitasse, hac ac nec pharetra integer vestibulum quis porttitor. </span>
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'orange', height: '70vh'}}>
                    <span className='text-before'>Lorem ipsum odio faucibus elementum fames neque class pellentesque taciti, ut magna fermentum quis leo laoreet fusce potenti, augue ultrices etiam augue sed felis bibendum suspendisse. eu aliquam augue velit eu sollicitudin odio justo, blandit duis sit purus ultricies augue venenatis, neque purus habitant quis mi himenaeos. dolor laoreet eu congue nullam erat himenaeos dictum, inceptos varius nec vulputate ante donec vitae augue, auctor cursus molestie cursus euismod facilisis. commodo scelerisque nisi sed fermentum lacinia amet quisque maecenas accumsan, imperdiet varius ullamcorper orci felis quisque sem habitasse, hac ac nec pharetra integer vestibulum quis porttitor. </span>
                </Col>
            </Row>
        </Container>
        <Container id='pagina2' className='background-space'></Container>
        <Container className='background-section2'>
            <Row className="mb-1">
                <Col xs={12} md={4} style={{ backgroundColor: 'purple', height: '40vh'}}>
                
                </Col>
                <Col xs={12} md={4} style={{ backgroundColor: 'white', height: '40vh'}}>
                
                </Col>
                <Col xs={12} md={4} style={{ backgroundColor: 'grey', height: '40vh'}}>
                
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} style={{ backgroundColor: 'pink', height: '40vh'}}>

                </Col>
                <Col xs={12} md={4} style={{ backgroundColor: 'blue', height: '40vh'}}>
                
                </Col>
                <Col xs={12} md={4} style={{ backgroundColor: 'orange', height: '40vh'}}>
                
                </Col>
            </Row>
        </Container>
        <Container id='pagina3' className='background-space'></Container>
        <Container className='background-contact'>
            <Row className='h-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'pink'}}>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span className='text-first'>Contato</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'green', height: '70vh'}}>
                    <span className='text-before'>bla</span>
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'orange', height: '70vh'}}>
                    <span className='text-before'>bla</span>
                </Col>
            </Row>
        </Container>
        <Container className='background-space'></Container>
        <Container className='background-maps'>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6634855092907!2d-46.5690953239996!3d-23.544602878811403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eeb62a33cfd%3A0x4bde5f170256d2d2!2sR.%20Serra%20de%20Japi%2C%20445%20-%20Vila%20Gomes%20Cardim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1705361038240!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            >
            </iframe> 
        </Container>
        <Container className='background-space'></Container>
        <WhatsAppButton phoneNumber="41987372059" />
        <footer className="bg-dark text-light py-3">
            <Container fluid>
                <p className="text-center mb-0">© Seu Nome ou Marca - {new Date().getFullYear()}</p>
            </Container>
        </footer>
    </Container>
  );
}

export default App;