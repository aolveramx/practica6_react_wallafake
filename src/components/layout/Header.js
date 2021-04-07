import { Link } from 'react-router-dom'
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDoorClosed, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-3">

      <Navbar.Brand>{title}</Navbar.Brand>

      <Nav className="mr-auto text-white">
        <Nav.Link href="/">Anuncios</Nav.Link>
        <Nav.Link href="/advert/new">Nuevo +</Nav.Link>
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
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'WALLAFAKE'
}

export default Header;