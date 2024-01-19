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
import Hb1 from './images/hb1.jpg';
import Hb2 from './images/hb2.jpg';
import Hb3 from './images/hb3.jpg';
import Face from './images/face.png';
import Insta from './images/insta.png';

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
    <Container fluid style={{ backgroundColor: '#121b21', minHeight: '100vh' }}>
        <Navbar bg="blue" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#sobre" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#f5ddba', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>  Sobre Nós  </Nav.Link>
                    <Nav.Link href="#cardapio" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#f5ddba', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Cardapio</Nav.Link>
                    <Nav.Link href="#contato" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#f5ddba', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Contato</Nav.Link>
                    <Nav.Link href="#localizacao" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#f5ddba', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Localização</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container className='background-space'></Container>
        <Container fluid className="background-section">
            <Carousel indicators={false} controls={false}>
                <Carousel.Item style={{ width: '100%', height: '70vh' }}>
                    <Image
                        className="d-block"
                        src={Sanduba}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '70vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ width: '100%', height: '70vh' }}>
                    <Image
                        className="d-block"
                        src={Tacos}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '70vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ width: '100%', height: '70vh' }}>
                    <Image
                        className="d-block"
                        src={Sanduba2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '70vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
        <Container id='sobre' className='background-space'></Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span className='text-first' style={{ color: '#f5ddba' }}>Sobre Nós</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ minHeight: '60vh', padding: '4rem 0', paddingLeft: '4rem 0'}}>
                    <div className='d-flex align-items-start'>
                        <span className='text-before' style={{ color: '#f5ddba' }}>RODIZIO</span>
                    </div>
                    <p className='text-description flex-grow-1' style={{ color: '#5e3f12' }}>
                        Desfrute de uma variedade irresistível com nosso rodízio de mini hambúrgueres artesanais. Saboreie combinações clássicas e inovadoras, todas preparadas com ingredientes frescos e locais. Uma experiência única que promete agradar a todos os paladares!
                    </p>
                    <div className='d-flex align-items-end'>
                        <p className='text-before' style={{ color: '#f5ddba' }}>
                            R$59,90
                        </p>
                    </div>
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ minHeight: '60vh', padding: '4rem 0'}}>
                    <div className='d-flex align-items-start'>
                        <span className='text-before' style={{ color: '#f5ddba' }}>A LA CARTE</span>
                    </div>
                    <p className='text-description flex-grow-1' style={{ color: '#5e3f12' }}>
                        Explore nosso menu à la carte e crie sua própria aventura gastronômica. Cada mini hambúrguer é uma obra de arte culinária, feito com carnes selecionadas e uma fusão de sabores que irão transportar seu paladar a novas alturas. Perfeitos para uma refeição leve ou para compartilhar momentos especiais.
                    </p>
                    <div className='d-flex align-items-end'>
                    <p className='text-before' style={{ color: '#f5ddba' }}>
                        A partir de R$29,90
                    </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container id='cardapio' className='background-space'></Container>
        <Container id='cardapio' className='text-first background-cardapio' style={{ color: '#f5ddba' }}>Cardápio</Container>
        <Container className='background-section2'>
            <Row className="mb-3">
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'purple', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Sanduba2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'white', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Sanduba}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'grey', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Hb1}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'pink', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Hb2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />           
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'blue', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Hb3}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'orange', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Sanduba}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
            </Row>
        </Container>
        <Container id='contato' className='background-space'></Container>
        <Container className='background-contact'>
            <Row className='h-100 d-flex justify-content-center align-items-center' /*style={{ backgroundColor: 'pink'}}*/>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span className='text-first' style={{ color: '#f5ddba' }}>Redes Sociais</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ /*backgroundColor: 'green',*/ height: '40vh'}}>
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="d-block zoom-hover"
                            src={Face}
                            alt="Primeiro slide"
                            style={{
                            maxWidth: '100%',     
                            maxHeight: '70vh',     
                            objectFit: 'contain', 
                            objectPosition: 'center center'
                            }}
                        />
                    </a>
                    <p className='text-before' style={{ color: '#f5ddba' }}>
                        BurguerMais
                    </p>
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ /*backgroundColor: 'orange',*/ height: '40vh'}}>
                    <a href="https://www.instagram.com/garbato.fabio/" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="d-block zoom-hover"
                            src={Insta}
                            alt="Primeiro slide"
                            style={{
                                maxWidth: '100%',     
                                maxHeight: '70vh',     
                                objectFit: 'contain', 
                                objectPosition: 'center center'
                            }}
                        />
                    </a>
                    <p className='text-before' style={{ color: '#f5ddba' }}>
                        @burguerMais
                    </p>
                </Col>
            </Row>
        </Container>
        <Container id='localizacao' className='background-space'></Container>
        <Container id='cardapio' className='text-first background-cardapio' style={{ color: '#f5ddba' }}>Faça-nos uma visita!</Container>
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
                <p className="text-center mb-0">© GB - Tecnologia - {new Date().getFullYear()}</p>
            </Container>
        </footer>
    </Container>
  );
}

export default App;