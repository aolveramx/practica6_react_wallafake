import { Badge, Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
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
            <h3>$900</h3>
            <Badge variant="warning">Compra</Badge>
            <Badge variant="info">Electrónicos</Badge>
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