import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <Container>
      <Navbar fixed="bottom" variant="light" bg="light">
        <Navbar.Brand href="#">
          <p className="center">Copyright &copy; 2021</p>
        </Navbar.Brand>
      </Navbar>
    </Container>
  )
}

export default Footer;
