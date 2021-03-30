import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = ({ onRegister }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if(!user && !password) {
      alert('Registra un nombre de usuario y password valido');
      return
    }

    onRegister({ user, password, confirmPassword });

    setUser('');
    setPassword('');
    setconfirmPassword('');
  };


  return (
    <Container>
      <Form onSubmit={onSubmit}>

        <Form.Group controlId="formText">
          <Form.Label>@Nombre de Usuario</Form.Label>
          <Form.Control 
          type="text"
          placeholder="@tweeterman"
          value={user}
          onChange={ (e) => setUser(e.target.value) }
          />
          <Form.Text className="text-muted">
            Tu información está prótegida con nosotros
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
          type="password"
          placeholder="1234"
          value={password}
          onChange={ (e) => setPassword(e.target.value) }>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formPasswordConfirm">
          <Form.Label>Confirma tu contraseña</Form.Label>
          <Form.Control 
          type="password"
          placeholder="1234"
          value={confirmPassword}
          onChange={ (e) => setconfirmPassword(e.target.value) }>
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
            <Link to="/LoginPage">
              <Button variant="secondary">Inicia Sesión</Button>
            </Link>
          </Row>
        </Col>
        
      </Form>
    </Container>
  )
}

export default RegisterPage;
