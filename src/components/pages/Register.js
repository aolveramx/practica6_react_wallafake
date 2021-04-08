import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
  const alertContext = useContext(AlertContext)

  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext

  const { register, error, clearErrors } = authContext

  useEffect(() => {
    if(error === 'El usuario ya existe') {
      setAlert(error, 'danger')
      clearErrors()
    }
    //eslint-disable-next-line
  }, [error])

  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
    name: ''
  })

  const { email, password, username, name  } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: [e.target.value]
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '' || username === '') {
      setAlert('Ingresa todos los campos', 'danger')
    } else {
      register({
        email,
        password,
        username,
        name,
      })
    }
  }

  return (
    <Container>
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formText">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control 
        type="email"
        name="email"
        placeholder="me@me.com"
        value={email}
        onChange={onChange}
        />
        <Form.Text className="text-muted">
          Tu información está prótegida con nosotros
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password"
        name="password"
        placeholder="1234"
        value={password}
        onChange={onChange}>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formUsername">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control 
        type="text"
        name="username"
        placeholder="camilomax"
        value={username}
        onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
        type="text"
        name="name"
        placeholder="Camilo Sánchez"
        value={name}
        onChange={onChange}
        />
      </Form.Group>

      <Button 
      variant="primary btn-block" 
      type="submit">
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
