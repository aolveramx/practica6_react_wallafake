import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultIMG from '../img/DefaultIMGAdvert.png'

function AdvertDetail() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col>            
            <h1>Sony PlayStation 5</h1>
            <hr/>
            <h3>900</h3>
            <h4>Compra</h4>
            <h5>Electronicos</h5>
            </Col>
            <Col>
            <img src={defaultIMG} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>
        <Button variant="outline-danger">Borrar</Button>
      </Jumbotron>
    </div>
  )
}

export default AdvertDetail