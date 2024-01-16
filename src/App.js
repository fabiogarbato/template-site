import './index.css';
import React from 'react';
import {Container, Carousel, Row, Col, Image}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';
import Sanduba from './images/sanduba.jpg';
import Sanduba2 from './images/sanduba2.jpg';
import Tacos from './images/tacos.jpg';

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
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Navbar id = 'home' bg="blue" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: '#FF4500', fontFamily: 'korataki' }}>  Home  </Nav.Link>
                    <Nav.Link href="#pagina1" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: '#FF4500', fontFamily: 'korataki' }}>Página 1</Nav.Link>
                    <Nav.Link href="#pagina2" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: '#FF4500', fontFamily: 'korataki' }}>Pagina 2</Nav.Link>
                    <Nav.Link href="#pagina3" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '32px', color: '#FF4500', fontFamily: 'korataki' }}>Pagina 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container fluid className="background-section">
            <Carousel>
                <Carousel.Item style={{ width: '100%', height: '50vh' }}>
                    <Image
                        className="d-block"
                        src={Sanduba}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '50vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ width: '100%', height: '50vh' }}>
                    <Image
                        className="d-block"
                        src={Tacos}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '50vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ width: '100%', height: '50vh' }}>
                    <Image
                        className="d-block"
                        src={Sanduba2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '50vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
        <Container id='pagina1' className='background-space'></Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span className='text-first' style={{ color: '#FF4500' }}>Sobre Nós</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: 'green', height: '70vh'}}>
                    <span className='text-before' style={{ color: '#FF4500' }}>RODIZIO</span>
                    <p className='text-description' style={{ color: '#FF4500' }}>
                        Desfrute de uma variedade irresistível com nosso rodízio de mini hambúrgueres artesanais. Saboreie combinações clássicas e inovadoras, todas preparadas com ingredientes frescos e locais. Uma experiência única que promete agradar a todos os paladares!
                    </p>
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: 'orange', height: '70vh'}}>
                    <span className='text-before' style={{ color: '#FF4500' }}>A LA CARTE</span>
                    <p className='text-description' style={{ color: '#FF4500' }}>
                        Explore nosso menu à la carte e crie sua própria aventura gastronômica. Cada mini hambúrguer é uma obra de arte culinária, feito com carnes selecionadas e uma fusão de sabores que irão transportar seu paladar a novas alturas. Perfeitos para uma refeição leve ou para compartilhar momentos especiais.
                    </p>
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
                <p className="text-center mb-0">© Fábio e Vinicius - {new Date().getFullYear()}</p>
            </Container>
        </footer>
    </Container>
  );
}

export default App;