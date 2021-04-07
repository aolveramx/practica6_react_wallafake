import Adverts from '../adverts/Adverts'
import AdvertForm from '../adverts/AdvertForm'
import AdvertFilter from '../adverts/AdvertFilter'
import { Container, Col, Row } from 'react-bootstrap'

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AdvertForm />
        </Col>
        <Col>
          <AdvertFilter />
          <Adverts />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
