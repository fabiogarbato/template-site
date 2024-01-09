import './index.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>  Home  </Nav.Link>
                    <Nav.Link href="#link" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Pagina 1</Nav.Link>
                    <Nav.Link href="#link" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Pagina 2</Nav.Link>
                    <Nav.Link href="#link" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Pagina 3</Nav.Link>
                    <Nav.Link href="#link" style={{ margin: '0 20px', fontSize: '32px', color: 'black' }}>Pagina 4</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container fluid className="py-5 background-section">
            {/* Conteúdo da Seção */}
        </Container> 
    </Container>
  );
}

export default App;