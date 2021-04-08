import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
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
      [e.target.name]: [e.target.value]
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Register Submit');
  }

  return (
    <Container>
    <Form onSubmit={onSubmit}>

      <Form.Group controlId="formName">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control 
        type="text"
        name="name"
        placeholder="Camilo"
        value={name}
        onChange={onChange}
        />
      </Form.Group>


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

      <Form.Group controlId="formPasswordConfirm">
        <Form.Label>Confirma tu contraseña</Form.Label>
        <Form.Control 
        type="password"
        placeholder="1234"
        value={password2}
        onChange={onChange}>
        </Form.Control>
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
