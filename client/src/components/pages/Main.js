import { useContext, useEffect } from 'react'
import Adverts from '../adverts/Adverts'
import AdvertForm from '../adverts/AdvertForm'
import AdvertFilter from '../adverts/AdvertFilter'
import { Container, Col, Row } from 'react-bootstrap'
import AuthContext from '../../context/auth/authContext'

const Main = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])


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
