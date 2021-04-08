import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
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
    console.log('Login Submit');
  }

  return (
    <Container>
    <Form onSubmit={onSubmit}>

      <Form.Group controlId="formText">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Ingresa tu correo, ejemplo: me@me.com"
        value={email}
        onChange={onChange}
        />
        <Form.Text className="text-muted">
          Tus datos no seran compartidos con terceros
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
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
