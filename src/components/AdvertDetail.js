import { Link } from 'react-router-dom'
import { Badge, Button, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import defaultIMG from '../img/DefaultIMGAdvert.png'

const AdvertDetail = ({ advert }) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col>            
            <h1>{advert.name}</h1>
            <hr/>
            <h3>{advert.price}</h3>
            <Badge variant="warning">{advert.tags}</Badge>
            <Badge variant="info">{advert.sale}</Badge>
            </Col>
            <Col>
            <img src={defaultIMG} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>
        <Link to="/">        
        <Button variant="outline-primary">Regresar</Button>
        </Link>
      </Jumbotron>
    </div>
  )
}

export default AdvertDetail