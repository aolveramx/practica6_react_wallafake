import { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

    if(error === 'Invalid Credentials') {
      setAlert(error, 'danger')
      clearErrors()
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: '',
    password: '',
    reminder: true
  })

  const { email, password, reminder } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert('Ingresa todos los campos correctamente', 'danger')
    } else {
      login({
        email,
        password
      })
    }
  }

  return (
    <Container>
    <Form onSubmit={onSubmit}>

      <Form.Group controlId="email">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
        type="email"
        name="email"
        placeholder="Ingresa tu correo, ejemplo: me@me.com"
        value={email}
        onChange={onChange}
        />
        <Form.Text className="text-muted">
          Tus datos no seran compartidos con terceros
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
        type="password"
        name="password"
        placeholder="Ingresa una contraseña valida, por ejemplo 1234"
        value={password}
        onChange={onChange}>
        </Form.Control>
      </Form.Group>

      <Form.Check
      className="mb-3" 
      type="switch"
      label="Recordar Acceso"
      checked={reminder}
      value={reminder}
      onChange={onChange}
      />

      <ButtonGroup>
        <Button to="/signup" type="submit" value="login">Entrar</Button>
        <Link to="/register">
          <Button variant="secondary">Registrarse</Button>
        </Link>

      </ButtonGroup>
      </Form>
    </Container>
  )
}

export default Login
