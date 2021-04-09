import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import { Button, Form, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  FaArrowRight,
  FaHome,
  FaFileSignature,
  FaSignInAlt,
} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext

  const onLogout = () => {
    logout()
  }

  const authLinks = (
    <Fragment>
      <Button variant='primary' className='disabled'>
        Hola {user && user.name}{' '}
      </Button>
      <Button variant='primary' className='mr-2' onClick={onLogout}>
        <FaArrowRight style={{ color: 'white', cursor: 'pointer' }} /> Salir
      </Button>
    </Fragment>
  )

  const guesstLinks = (
    <Fragment>
      <Link to='/register'>
        <Button variant='primary' className='mr-2'>
          <FaFileSignature style={{ color: 'white', cursor: 'pointer' }} />{' '}
          Registro
        </Button>
      </Link>

      <Link to='/login'>
        <Button variant='primary' className='mr-2'>
          <FaSignInAlt style={{ color: 'white', cursor: 'pointer' }} />{' '}Ingresa
        </Button>
      </Link>
    </Fragment>
  )

  return (
    <Navbar bg='primary' variant='dark' className='mb-3'>
      <Navbar.Brand>{title}</Navbar.Brand>
      <Nav className='mr-auto text-white'>
        <Link to='/'>
          <Button variant='primary' className='mr-2'>
            <FaHome style={{ color: 'white', cursor: 'pointer' }} /> Anuncios
          </Button>
        </Link>
      </Nav>

      <Form inline className='text-white'>
        {isAuthenticated ? authLinks : guesstLinks}
      </Form>
    </Navbar>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: 'WALLAFAKE',
}

export default Header
