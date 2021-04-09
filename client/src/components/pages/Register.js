import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/')
    }

    if(error === 'El Usuario ya existe') {
      setAlert(error, 'danger')
      clearErrors()
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    register({
      name,
      email,
      password
    })
  }

  return (
    <Container>
    <Form onSubmit={onSubmit}>

    <Form.Group>
        <Form.Label htmlFor='name'>Nombre</Form.Label>
        <Form.Control
        type="text"
        name="name"
        placeholder="Camilo"
        value={name}
        onChange={onChange}
        required
        >
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='email'>Correo Electrónico</Form.Label>
        <Form.Control
        type="email"
        name="email"
        placeholder="me@me.com"
        value={email}
        onChange={onChange}
        required
        />
        <Form.Text className="text-muted">
          Tu información está prótegida con nosotros
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Contraseña</Form.Label>
        <Form.Control
        type="password"
        name="password"
        placeholder="123456"
        value={password}
        onChange={onChange}
        required
        minLength='6'
        >
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password2'>Confirma tu contraseña</Form.Label>
        <Form.Control
        type="password"
        name="password2"
        placeholder="123456"
        value={password2}
        onChange={onChange}
        required
        minLength='6'
        />
      </Form.Group>

      <Button 
      variant="primary btn-block" 
      type="submit"
      value='Register'
      >
      Registro
      </Button>

      <Col className="m-3">
        <Row>
          <p className="mr-3">Ya estas registrado?</p>
          <Link to="/login">
            <Button variant="secondary">Inicia Sesión</Button>
          </Link>
        </Row>
      </Col>
    </Form>
  </Container>
  )
}

export default Register
