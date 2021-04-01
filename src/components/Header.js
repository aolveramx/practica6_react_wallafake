import { Link } from 'react-router-dom'
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDoorClosed, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <>
    <Navbar bg="primary" variant="dark" className="mb-3">
      <Navbar.Brand>WallaFake</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Anuncios</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/advert/new">Nuevo +</Link>
        </Nav.Link>
        {/* <Nav.Link href="/advert/new">Nuevo +</Nav.Link> */}
      </Nav>
      <Form inline>
        <Button variant="outline-light" className="mr-2">
          <FaSearch />
        </Button>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="danger" className="mr-2">
          <FaDoorClosed style={{ color: 'white', cursor: 'pointer'}} />
        </Button>
      </Form>
    </Navbar>
  </>
  )
}

export default Header;
