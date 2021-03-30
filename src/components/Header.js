import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
    <Navbar bg="primary" variant="dark" className="mb-3">
      <Navbar.Brand href="/">WallaFake</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Anuncios</Nav.Link>
        <Nav.Link href="/">Nuevo +</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-light">Buscar</Button>
      </Form>
    </Navbar>
  </>
  )
}

export default Header;
