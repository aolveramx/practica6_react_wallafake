import Adverts from '../adverts/Adverts'
import AdvertForm from '../adverts/AdvertForm'
import { Container, Col, Row } from 'react-bootstrap'

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Adverts />
        </Col>
        <Col>
          <AdvertForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
