import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginPage = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!user && !password) {
      alert('Ingresa un nombre de usuario y password valido');
      return
    }

    onLogin({ user, password, reminder });

    setUser('');
    setPassword('');
    // setReminder(false);
  };


  return (
    <Container>
      <Form onSubmit={onSubmit}>

        <Form.Group controlId="formText">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control 
          type="text"
          placeholder="@tweeterman"
          value={user}
          onChange={ (e) => setUser(e.target.value) }
          />
          <Form.Text className="text-muted">
            Tus datos no seran compartidos con terceros
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

        <Form.Check
        className="mb-3" 
        type="switch"
        label="Recordar Acceso"
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked) }
        />

        <ButtonGroup>
          <Button variant="primary" type="submit">Entrar</Button>
          <Link to="/signup">
            <Button variant="secondary">Registrarse</Button>
          </Link>
        </ButtonGroup>

        {/* <Button 
        variant="primary" 
        type="submit">
        Inicia Sesión
        </Button> */}

      </Form>
    </Container>
  )
}

export default LoginPage;
